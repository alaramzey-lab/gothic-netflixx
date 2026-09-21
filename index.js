const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Paths - use /tmp on some hosts if needed, but keep relative for most
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');
const DB_FILE = path.join(__dirname, 'movies.json');

// Ensure uploads directory exists
try {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
} catch (e) {
  console.warn('Could not create uploads dir:', e.message);
}

// Simple JSON file database
function loadDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('DB read error:', e.message);
  }
  return { movies: [] };
}

function saveDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('DB write error:', e.message);
  }
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/uploads', express.static(UPLOADS_DIR));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Multer config for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    } catch (_) {}
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || '.mp4';
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 * 1024 }, // 500MB limit for free tiers
  fileFilter: (req, file, cb) => {
    if (file.mimetype && file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Only video files are allowed'));
    }
  }
});

// ========== API ROUTES ==========

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Gothic Netflix Vault is alive' });
});

app.get('/api/movies', (req, res) => {
  try {
    const data = loadDB();
    const movies = (data.movies || [])
      .filter(m => m.is_public)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const result = movies.map(m => ({
      id: m.id,
      title: m.title,
      filename: m.filename,
      original_name: m.original_name,
      size: m.size,
      mime_type: m.mime_type,
      shared_by: m.shared_by,
      created_at: m.created_at,
      videoUrl: `${baseUrl}/uploads/${m.filename}`,
      sizeMB: m.size ? (m.size / (1024 * 1024)).toFixed(1) : '0'
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

app.get('/api/movies/:id', (req, res) => {
  try {
    const data = loadDB();
    const movie = (data.movies || []).find(m => m.id === req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.json({
      ...movie,
      videoUrl: `${baseUrl}/uploads/${movie.filename}`
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
});

app.post('/api/upload', upload.single('video'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file provided' });
    }

    const id = uuidv4();
    const title = (req.body.title || req.file.originalname || 'Untitled').replace(/\.[^/.]+$/, '') || 'Untitled Dark Film';
    const sharedBy = req.body.sharedBy || 'anonymous';

    const movie = {
      id,
      title,
      filename: req.file.filename,
      original_name: req.file.originalname,
      size: req.file.size,
      mime_type: req.file.mimetype,
      is_public: true,
      shared_by: sharedBy,
      created_at: new Date().toISOString()
    };

    const data = loadDB();
    data.movies = data.movies || [];
    data.movies.push(movie);
    saveDB(data);

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.status(201).json({
      id,
      title,
      videoUrl: `${baseUrl}/uploads/${req.file.filename}`,
      message: 'Movie summoned to the public vault'
    });
  } catch (err) {
    console.error(err);
    if (req.file && req.file.path) {
      try { fs.unlinkSync(req.file.path); } catch (_) {}
    }
    res.status(500).json({ error: err.message || 'Upload failed' });
  }
});

app.post('/api/share', upload.single('video'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file provided' });
    }

    const id = uuidv4();
    const title = (req.body.title || req.file.originalname || 'Shared').replace(/\.[^/.]+$/, '') || 'Shared Selection';
    const sharedBy = req.body.sharedBy || 'Ramzey';

    const movie = {
      id,
      title,
      filename: req.file.filename,
      original_name: req.file.originalname,
      size: req.file.size,
      mime_type: req.file.mimetype,
      is_public: true,
      shared_by: sharedBy,
      created_at: new Date().toISOString()
    };

    const data = loadDB();
    data.movies = data.movies || [];
    data.movies.push(movie);
    saveDB(data);

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    res.status(201).json({
      id,
      title,
      videoUrl: `${baseUrl}/uploads/${req.file.filename}`,
      message: 'Vault item shared to the public realm'
    });
  } catch (err) {
    console.error(err);
    if (req.file && req.file.path) {
      try { fs.unlinkSync(req.file.path); } catch (_) {}
    }
    res.status(500).json({ error: err.message || 'Share failed' });
  }
});

app.delete('/api/movies/:id', (req, res) => {
  try {
    const data = loadDB();
    const idx = (data.movies || []).findIndex(m => m.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Movie not found' });

    const movie = data.movies[idx];
    const filePath = path.join(UPLOADS_DIR, movie.filename);
    if (fs.existsSync(filePath)) {
      try { fs.unlinkSync(filePath); } catch (_) {}
    }

    data.movies.splice(idx, 1);
    saveDB(data);
    res.json({ message: 'Movie purged from the vault' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete movie' });
  }
});

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(413).json({ error: 'File too large (max 500MB on free tier)' });
    }
  }
  console.error(err);
  res.status(500).json({ error: err.message || 'Server error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gothic Netflix Vault running on port ${PORT}`);
});
