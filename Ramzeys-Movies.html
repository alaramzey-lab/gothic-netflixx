<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramzey's movies</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0a0a0a;
            --accent-color: #8b0000;
            --accent-glow: #ff1a1a;
            --text-color: #e0e0e0;
            --card-width: 200px;
            --card-height: 280px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Cinzel', serif;
            min-height: 100vh;
            overflow-x: hidden;
            padding-bottom: 50px;
        }

        /* Gothic Header */
        header {
            text-align: center;
            padding: 40px 20px 20px 20px;
            border-bottom: 2px solid var(--accent-color);
            box-shadow: 0 5px 20px rgba(139, 0, 0, 0.3);
            background: linear-gradient(180deg, #150000 0%, #0a0a0a 100%);
            position: relative;
        }

        .main-title {
            font-family: 'Cinzel Decorative', serif;
            font-size: 3.5rem;
            color: var(--accent-color);
            text-shadow: 0 0 10px var(--accent-glow), 2px 2px 4px #000;
            outline: none;
            display: inline-block;
            border-bottom: 1px dashed transparent;
            transition: border-color 0.3s;
            padding: 5px 15px;
        }

        .main-title:focus {
            border-color: var(--accent-glow);
            background: rgba(255,255,255,0.02);
        }

        .subtitle {
            font-size: 0.9rem;
            letter-spacing: 4px;
            color: #888;
            margin-top: 10px;
            text-transform: uppercase;
        }

        .server-status {
            position: absolute;
            top: 15px;
            right: 20px;
            font-size: 0.75rem;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #555;
        }

        .status-dot.online {
            background: #2ecc71;
            box-shadow: 0 0 8px #2ecc71;
        }

        .status-dot.offline {
            background: #e74c3c;
            box-shadow: 0 0 8px #e74c3c;
        }

        /* Main Container */
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* Netflix-style Section */
        .movie-section {
            margin-bottom: 50px;
        }

        .section-title {
            font-family: 'Cinzel Decorative', serif;
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #fff;
            border-left: 4px solid var(--accent-color);
            padding-left: 15px;
            text-shadow: 0 0 5px rgba(139, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }

        .section-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        /* Netflix Grid Display */
        .netflix-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
            gap: 25px;
        }

        /* Gothic Movie Card */
        .movie-card {
            width: 100%;
            height: var(--card-height);
            background: #111;
            border: 1px solid #222;
            border-radius: 4px;
            position: relative;
            cursor: pointer;
            overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s;
            box-shadow: 0 4px 10px rgba(0,0,0,0.7);
        }

        .movie-card:hover {
            transform: scale(1.08);
            border-color: var(--accent-glow);
            box-shadow: 0 10px 25px rgba(139, 0, 0, 0.4);
            z-index: 2;
        }

        /* Empty/Drop-zone Card Styling */
        .card-dropzone {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
            border: 2px dashed #444;
        }

        .card-dropzone:hover, .card-dropzone.dragover {
            border-color: var(--accent-glow);
            background: rgba(139, 0, 0, 0.05);
        }

        .drop-icon {
            font-size: 2.5rem;
            color: #555;
            margin-bottom: 10px;
            transition: color 0.3s;
        }

        .movie-card:hover .drop-icon {
            color: var(--accent-color);
        }

        .drop-text {
            font-size: 0.8rem;
            color: #888;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Populated Poster Thumbnail Mock */
        .poster-thumb {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #1a0000 0%, #050505 100%);
            position: relative;
        }

        .poster-thumb::before {
            content: '▶';
            font-size: 3rem;
            color: rgba(255, 255, 255, 0.15);
            transition: color 0.3s, transform 0.3s;
        }

        .movie-card:hover .poster-thumb::before {
            color: var(--accent-glow);
            transform: scale(1.2);
        }

        /* Public card badge */
        .public-badge {
            position: absolute;
            top: 8px;
            left: 8px;
            background: rgba(139, 0, 0, 0.9);
            color: #fff;
            font-size: 0.65rem;
            padding: 3px 8px;
            border-radius: 3px;
            letter-spacing: 1px;
            text-transform: uppercase;
            z-index: 4;
        }

        .shared-by {
            position: absolute;
            bottom: 45px;
            left: 10px;
            right: 10px;
            font-size: 0.7rem;
            color: #aaa;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        /* Movie Title Card Overlay */
        .card-metadata {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%);
            padding: 15px 10px 10px 10px;
            transform: translateY(0);
            transition: transform 0.3s;
        }

        .card-title-input {
            width: 100%;
            background: transparent;
            border: none;
            border-bottom: 1px dashed transparent;
            color: #fff;
            font-family: 'Cinzel', serif;
            font-size: 0.95rem;
            font-weight: bold;
            outline: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }

        .card-title-input:focus {
            border-color: var(--accent-glow);
            white-space: normal;
            overflow: visible;
        }

        /* Utility buttons on card */
        .card-actions {
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            gap: 5px;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 5;
        }

        .movie-card:hover .card-actions {
            opacity: 1;
        }

        .btn-mini {
            background: rgba(0,0,0,0.8);
            border: 1px solid #444;
            color: #aaa;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            transition: all 0.3s;
        }

        .btn-mini:hover {
            border-color: var(--accent-glow);
            color: #fff;
            background: var(--accent-color);
        }

        /* Giant Theater Overlay Mode */
        .theater-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(5, 5, 5, 0.98);
            z-index: 100;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            animation: fadeIn 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .theater-container {
            width: 100%;
            max-width: 1100px;
            background: #000;
            border: 2px solid var(--accent-color);
            box-shadow: 0 0 50px rgba(139, 0, 0, 0.6);
            position: relative;
            border-radius: 4px;
            overflow: hidden;
        }

        .theater-header {
            background: #111;
            padding: 15px 25px;
            border-bottom: 1px solid #222;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .theater-title {
            font-family: 'Cinzel Decorative', serif;
            color: #fff;
            font-size: 1.4rem;
            text-shadow: 0 0 5px var(--accent-glow);
        }

        .close-theater {
            background: transparent;
            border: none;
            color: #888;
            font-size: 2rem;
            cursor: pointer;
            transition: color 0.3s;
            line-height: 1;
        }

        .close-theater:hover {
            color: var(--accent-glow);
        }

        .video-wrapper {
            position: relative;
            padding-top: 56.25%; /* 16:9 Aspect Ratio */
            background: #000;
        }

        .video-wrapper video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            outline: none;
        }

        /* Controls Block */
        .controls-panel {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .btn-gothic {
            background: linear-gradient(180deg, #4a0000 0%, #220000 100%);
            border: 1px solid var(--accent-color);
            color: var(--text-color);
            font-family: 'Cinzel', serif;
            font-size: 0.95rem;
            padding: 12px 24px;
            cursor: pointer;
            letter-spacing: 2px;
            text-transform: uppercase;
            box-shadow: 0 0 10px rgba(139, 0, 0, 0.3);
            transition: all 0.3s;
            border-radius: 4px;
        }

        .btn-gothic:hover {
            border-color: var(--accent-glow);
            box-shadow: 0 0 20px var(--accent-glow);
            background: linear-gradient(180deg, #6a0000 0%, #330000 100%);
            color: #fff;
        }

        .btn-gothic:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            box-shadow: none;
        }

        .btn-gothic.secondary {
            background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
            border-color: #444;
        }

        .btn-gothic.secondary:hover {
            border-color: var(--accent-glow);
            background: linear-gradient(180deg, #2a0000 0%, #110000 100%);
        }

        /* Toast notifications */
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: #1a0000;
            border: 1px solid var(--accent-color);
            color: #fff;
            padding: 14px 28px;
            border-radius: 4px;
            font-size: 0.95rem;
            letter-spacing: 1px;
            z-index: 200;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            box-shadow: 0 0 20px rgba(139, 0, 0, 0.5);
            max-width: 90%;
            text-align: center;
        }

        .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }

        /* Progress overlay for uploads */
        .upload-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.85);
            z-index: 150;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }

        .upload-progress.show {
            display: flex;
        }

        .progress-bar-container {
            width: 300px;
            max-width: 80%;
            height: 8px;
            background: #222;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-glow));
            transition: width 0.2s;
        }

        .progress-text {
            font-size: 1rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ccc;
        }

        /* Empty state for public */
        .empty-public {
            grid-column: 1 / -1;
            text-align: center;
            padding: 60px 20px;
            color: #666;
            border: 1px dashed #333;
            border-radius: 4px;
        }

        .empty-public p {
            margin-top: 10px;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }

        /* Hidden file input for public upload */
        #publicFileInput {
            display: none;
        }

        @media (max-width: 600px) {
            .main-title {
                font-size: 2.2rem;
            }
            .server-status {
                position: static;
                justify-content: center;
                margin-top: 15px;
            }
        }
    </style>
</head>
<body>

    <header>
        <h1 class="main-title" id="siteTitle" contenteditable="true" onblur="saveSiteTitle()">Ramzey's movies</h1>
        <div class="subtitle">Your Eternal Cinematic Vault</div>
        <div class="server-status">
            <span class="status-dot" id="statusDot"></span>
            <span id="statusText">Checking server...</span>
        </div>
    </header>

    <div class="container">
        <!-- LOCAL PRIVATE VAULT -->
        <div class="movie-section">
            <h2 class="section-title">
                <span>My Dark Vault</span>
                <div class="section-actions">
                    <button class="btn-gothic secondary" onclick="createNewSlot()" style="padding: 8px 16px; font-size: 0.8rem;">+ Summon Card</button>
                    <button class="btn-gothic" id="shareVaultBtn" onclick="shareEntireVault()" style="padding: 8px 16px; font-size: 0.8rem;">☁ Share Vault</button>
                </div>
            </h2>
            <div class="netflix-grid" id="movieGrid">
                <!-- Local movie cards injected dynamically -->
            </div>
        </div>

        <!-- PUBLIC CLOUD VAULT -->
        <div class="movie-section">
            <h2 class="section-title">
                <span>Public Movies — Open Vault</span>
                <div class="section-actions">
                    <button class="btn-gothic" onclick="triggerPublicUpload()" style="padding: 8px 16px; font-size: 0.8rem;">↑ Upload Public</button>
                    <button class="btn-gothic secondary" onclick="loadPublicMovies()" style="padding: 8px 16px; font-size: 0.8rem;">↻ Refresh</button>
                </div>
            </h2>
            <div class="netflix-grid" id="publicGrid">
                <div class="empty-public" id="publicEmpty">
                    <div style="font-size: 2rem; margin-bottom: 10px;">⌀</div>
                    <p>No public films yet. Be the first to upload.</p>
                </div>
            </div>
        </div>

        <div class="controls-panel">
            <button class="btn-gothic secondary" onclick="createNewSlot()">+ Summon Movie Card</button>
            <button class="btn-gothic" id="shareVaultBtn2" onclick="shareEntireVault()">☁ Share My Vault to Public</button>
        </div>
    </div>

    <!-- Hidden file input for public uploads -->
    <input type="file" id="publicFileInput" accept="video/*" onchange="handlePublicFileSelect(event)">

    <!-- Netflix Full Screen Cinema Modal -->
    <div class="theater-overlay" id="theaterOverlay">
        <div class="theater-container">
            <div class="theater-header">
                <div class="theater-title" id="theaterTitle">Now Screening</div>
                <button class="close-theater" onclick="closeTheater()">&times;</button>
            </div>
            <div class="video-wrapper">
                <video id="mainPlayer" controls autoplay></video>
            </div>
        </div>
    </div>

    <!-- Upload progress overlay -->
    <div class="upload-progress" id="uploadProgress">
        <div class="progress-text" id="progressText">Uploading to the void...</div>
        <div class="progress-bar-container">
            <div class="progress-bar" id="progressBar"></div>
        </div>
    </div>

    <!-- Toast -->
    <div class="toast" id="toast"></div>

    <script>
        // ========== CONFIG ==========
        // Change this to your deployed server URL when you go live
        const API_BASE = window.location.origin; // works when served by the Node server
        // For local testing against a remote server you can hardcode:
        // const API_BASE = 'https://your-deployed-url.com';

        let db = null;
        const DB_NAME = "GothicNetflixDB";
        const DB_VERSION = 1;
        const STORE_MOVIES = "movies";
        const STORE_SETTINGS = "settings";

        // ========== UTILITIES ==========
        function showToast(msg, duration = 3500) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), duration);
        }

        function showProgress(text) {
            document.getElementById('progressText').textContent = text;
            document.getElementById('progressBar').style.width = '0%';
            document.getElementById('uploadProgress').classList.add('show');
        }

        function updateProgress(pct) {
            document.getElementById('progressBar').style.width = pct + '%';
        }

        function hideProgress() {
            document.getElementById('uploadProgress').classList.remove('show');
        }

        // ========== SERVER STATUS ==========
        async function checkServer() {
            const dot = document.getElementById('statusDot');
            const text = document.getElementById('statusText');
            try {
                const res = await fetch(`${API_BASE}/api/health`, { cache: 'no-store' });
                if (res.ok) {
                    dot.className = 'status-dot online';
                    text.textContent = 'Cloud Vault Online';
                    return true;
                }
            } catch (e) {}
            dot.className = 'status-dot offline';
            text.textContent = 'Cloud Offline — local only';
            return false;
        }

        // ========== INDEXEDDB (LOCAL VAULT) ==========
        function initDB() {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = function(event) {
                console.error("Database connection failure:", event.target.errorCode);
            };

            request.onupgradeneeded = function(event) {
                const activeDB = event.target.result;
                if (!activeDB.objectStoreNames.contains(STORE_MOVIES)) {
                    activeDB.createObjectStore(STORE_MOVIES, { keyPath: "id" });
                }
                if (!activeDB.objectStoreNames.contains(STORE_SETTINGS)) {
                    activeDB.createObjectStore(STORE_SETTINGS, { keyPath: "key" });
                }
            };

            request.onsuccess = function(event) {
                db = event.target.result;
                loadSiteSettings();
                loadMovieCatalog();
                checkServer().then(online => {
                    if (online) loadPublicMovies();
                });
            };
        }

        function saveSiteTitle() {
            const titleEl = document.getElementById("siteTitle");
            const tx = db.transaction(STORE_SETTINGS, "readwrite");
            tx.objectStore(STORE_SETTINGS).put({ key: "title", value: titleEl.innerText });
        }

        function loadSiteSettings() {
            const tx = db.transaction(STORE_SETTINGS, "readonly");
            const req = tx.objectStore(STORE_SETTINGS).get("title");
            req.onsuccess = function() {
                if (req.result) {
                    document.getElementById("siteTitle").innerText = req.result.value;
                }
            };
        }

        function loadMovieCatalog() {
            const grid = document.getElementById("movieGrid");
            grid.innerHTML = "";

            const tx = db.transaction(STORE_MOVIES, "readonly");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.getAll();

            req.onsuccess = function() {
                const items = req.result;

                if (items.length === 0) {
                    for (let i = 0; i < 12; i++) {
                        generateBlankSlotRecord(i);
                    }
                    return;
                }

                items.sort((a, b) => a.id - b.id);
                items.forEach(movie => {
                    renderMovieCard(movie);
                });
            };
        }

        function generateBlankSlotRecord(idValue) {
            const tx = db.transaction(STORE_MOVIES, "readwrite");
            const movieObj = { id: idValue, title: `Dark Selection ${idValue + 1}`, hasVideo: false, videoBlob: null };
            tx.objectStore(STORE_MOVIES).put(movieObj);
            tx.oncomplete = function() {
                renderMovieCard(movieObj);
            };
        }

        function createNewSlot() {
            const tx = db.transaction(STORE_MOVIES, "readonly");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.getAll();
            req.onsuccess = function() {
                const currentItems = req.result;
                let maxId = -1;
                currentItems.forEach(item => { if (item.id > maxId) maxId = item.id; });
                generateBlankSlotRecord(maxId + 1);
            };
        }

        function renderMovieCard(movie) {
            const grid = document.getElementById("movieGrid");
            const card = document.createElement("div");
            card.className = "movie-card";
            card.id = `card-${movie.id}`;

            if (!movie.hasVideo) {
                card.classList.add("card-dropzone");
                card.innerHTML = `
                    <div class="drop-icon">⌽</div>
                    <div class="drop-text">Drag Video Here</div>
                    <div class="card-metadata">
                        <input type="text" class="card-title-input" value="${escapeHtml(movie.title)}" onclick="event.stopPropagation();" onchange="updateMovieTitle(${movie.id}, this.value)">
                    </div>
                    <div class="card-actions">
                        <button class="btn-mini" onclick="event.stopPropagation(); obliterateSlot(${movie.id})">&times;</button>
                    </div>
                `;

                card.addEventListener("dragover", (e) => { e.preventDefault(); card.classList.add("dragover"); });
                card.addEventListener("dragleave", () => card.classList.remove("dragover"));
                card.addEventListener("drop", (e) => {
                    e.preventDefault();
                    card.classList.remove("dragover");
                    const files = e.dataTransfer.files;
                    if (files.length > 0 && files[0].type.startsWith("video/")) {
                        commitVideoFile(movie.id, files[0]);
                    }
                });
            } else {
                card.innerHTML = `
                    <div class="poster-thumb" onclick="launchCinema(${movie.id})"></div>
                    <div class="card-metadata">
                        <input type="text" class="card-title-input" value="${escapeHtml(movie.title)}" onclick="event.stopPropagation();" onchange="updateMovieTitle(${movie.id}, this.value)">
                    </div>
                    <div class="card-actions">
                        <button class="btn-mini" title="Share this movie to public" onclick="event.stopPropagation(); shareSingleMovie(${movie.id})">☁</button>
                        <button class="btn-mini" title="Purge Video Media" onclick="event.stopPropagation(); purgeVideoMedia(${movie.id})">⎋</button>
                        <button class="btn-mini" title="Obliterate Card" onclick="event.stopPropagation(); obliterateSlot(${movie.id})">&times;</button>
                    </div>
                `;
            }

            grid.appendChild(card);
        }

        function escapeHtml(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        function updateMovieTitle(id, newTitle) {
            const tx = db.transaction(STORE_MOVIES, "readwrite");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.get(id);
            req.onsuccess = function() {
                const data = req.result;
                data.title = newTitle;
                store.put(data);
            };
        }

        function commitVideoFile(id, file) {
            const tx = db.transaction(STORE_MOVIES, "readwrite");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.get(id);

            req.onsuccess = function() {
                const data = req.result;
                data.hasVideo = true;
                data.videoBlob = file;

                if (data.title.startsWith("Dark Selection")) {
                    const cleanName = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
                    data.title = cleanName;
                }

                const writeReq = store.put(data);
                writeReq.onsuccess = function() {
                    loadMovieCatalog();
                };
                writeReq.onerror = function() {
                    showToast("Storage threshold reached. Unable to save local video.");
                };
            };
        }

        function purgeVideoMedia(id) {
            const tx = db.transaction(STORE_MOVIES, "readwrite");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.get(id);
            req.onsuccess = function() {
                const data = req.result;
                data.hasVideo = false;
                data.videoBlob = null;
                store.put(data).onsuccess = function() {
                    loadMovieCatalog();
                };
            };
        }

        function obliterateSlot(id) {
            const tx = db.transaction(STORE_MOVIES, "readwrite");
            tx.objectStore(STORE_MOVIES).delete(id).onsuccess = function() {
                loadMovieCatalog();
            };
        }

        function launchCinema(id) {
            const tx = db.transaction(STORE_MOVIES, "readonly");
            const req = tx.objectStore(STORE_MOVIES).get(id);
            req.onsuccess = function() {
                const movie = req.result;
                if (movie && movie.hasVideo && movie.videoBlob) {
                    const overlay = document.getElementById("theaterOverlay");
                    const player = document.getElementById("mainPlayer");
                    const titleText = document.getElementById("theaterTitle");

                    titleText.innerText = movie.title;
                    const videoURL = URL.createObjectURL(movie.videoBlob);
                    player.src = videoURL;

                    overlay.style.display = "flex";
                }
            };
        }

        function launchPublicCinema(videoUrl, title) {
            const overlay = document.getElementById("theaterOverlay");
            const player = document.getElementById("mainPlayer");
            const titleText = document.getElementById("theaterTitle");

            titleText.innerText = title;
            player.src = videoUrl;
            overlay.style.display = "flex";
        }

        function closeTheater() {
            const overlay = document.getElementById("theaterOverlay");
            const player = document.getElementById("mainPlayer");

            if (player.src && player.src.startsWith('blob:')) {
                URL.revokeObjectURL(player.src);
            }
            player.pause();
            player.removeAttribute('src');
            player.load();

            overlay.style.display = "none";
        }

        // ========== PUBLIC / CLOUD FEATURES ==========

        async function loadPublicMovies() {
            const grid = document.getElementById('publicGrid');
            const empty = document.getElementById('publicEmpty');

            try {
                const res = await fetch(`${API_BASE}/api/movies`);
                if (!res.ok) throw new Error('Failed to load');

                const movies = await res.json();

                // Clear previous (keep empty node for re-use)
                grid.querySelectorAll('.movie-card').forEach(c => c.remove());

                if (!movies.length) {
                    if (empty) empty.style.display = 'block';
                    return;
                }

                if (empty) empty.style.display = 'none';

                movies.forEach(movie => {
                    const card = document.createElement('div');
                    card.className = 'movie-card';
                    card.innerHTML = `
                        <div class="public-badge">Public</div>
                        <div class="poster-thumb" onclick="launchPublicCinema('${movie.videoUrl}', '${escapeHtml(movie.title)}')"></div>
                        <div class="shared-by">by ${escapeHtml(movie.shared_by || 'anonymous')}</div>
                        <div class="card-metadata">
                            <div class="card-title-input" style="cursor:default;">${escapeHtml(movie.title)}</div>
                        </div>
                        <div class="card-actions">
                            <button class="btn-mini" title="Remove from public" onclick="event.stopPropagation(); deletePublicMovie('${movie.id}')">&times;</button>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            } catch (err) {
                console.error(err);
                showToast('Could not reach the cloud vault');
            }
        }

        function triggerPublicUpload() {
            document.getElementById('publicFileInput').click();
        }

        async function handlePublicFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;

            const title = prompt('Title for this public film:', file.name.replace(/\.[^/.]+$/, '')) || file.name;

            await uploadToCloud(file, title, 'anonymous', '/api/upload');
            event.target.value = ''; // reset
        }

        async function uploadToCloud(file, title, sharedBy, endpoint) {
            const online = await checkServer();
            if (!online) {
                showToast('Cloud is offline. Cannot upload.');
                return false;
            }

            showProgress(`Uploading "${title}"...`);

            return new Promise((resolve) => {
                const formData = new FormData();
                formData.append('video', file);
                formData.append('title', title);
                formData.append('sharedBy', sharedBy);

                const xhr = new XMLHttpRequest();
                xhr.open('POST', `${API_BASE}${endpoint}`);

                xhr.upload.onprogress = (e) => {
                    if (e.lengthComputable) {
                        const pct = Math.round((e.loaded / e.total) * 100);
                        updateProgress(pct);
                        document.getElementById('progressText').textContent = `Uploading "${title}" — ${pct}%`;
                    }
                };

                xhr.onload = () => {
                    hideProgress();
                    if (xhr.status >= 200 && xhr.status < 300) {
                        showToast(`"${title}" now lives in the public vault`);
                        loadPublicMovies();
                        resolve(true);
                    } else {
                        let msg = 'Upload failed';
                        try { msg = JSON.parse(xhr.responseText).error || msg; } catch (_) {}
                        showToast(msg);
                        resolve(false);
                    }
                };

                xhr.onerror = () => {
                    hideProgress();
                    showToast('Network error during upload');
                    resolve(false);
                };

                xhr.send(formData);
            });
        }

        // Share a single local movie to public
        async function shareSingleMovie(id) {
            const tx = db.transaction(STORE_MOVIES, "readonly");
            const req = tx.objectStore(STORE_MOVIES).get(id);
            req.onsuccess = async function() {
                const movie = req.result;
                if (!movie || !movie.hasVideo || !movie.videoBlob) {
                    showToast('No video to share on this card');
                    return;
                }
                await uploadToCloud(movie.videoBlob, movie.title, 'Ramzey', '/api/share');
            };
        }

        // Share entire local vault (all cards that have video)
        async function shareEntireVault() {
            const online = await checkServer();
            if (!online) {
                showToast('Cloud is offline. Cannot share vault.');
                return;
            }

            const tx = db.transaction(STORE_MOVIES, "readonly");
            const store = tx.objectStore(STORE_MOVIES);
            const req = store.getAll();

            req.onsuccess = async function() {
                const items = req.result.filter(m => m.hasVideo && m.videoBlob);
                if (!items.length) {
                    showToast('Your vault is empty of videos. Nothing to share.');
                    return;
                }

                const confirmMsg = `Share ${items.length} movie(s) from your local vault to the public cloud?`;
                if (!confirm(confirmMsg)) return;

                let success = 0;
                for (let i = 0; i < items.length; i++) {
                    const m = items[i];
                    showProgress(`Sharing ${i + 1}/${items.length}: ${m.title}`);
                    const ok = await uploadToCloud(m.videoBlob, m.title, 'Ramzey', '/api/share');
                    if (ok) success++;
                }

                hideProgress();
                showToast(`Shared ${success} of ${items.length} films to the public vault`);
                loadPublicMovies();
            };
        }

        async function deletePublicMovie(id) {
            if (!confirm('Purge this film from the public vault forever?')) return;

            try {
                const res = await fetch(`${API_BASE}/api/movies/${id}`, { method: 'DELETE' });
                if (res.ok) {
                    showToast('Film purged from the public realm');
                    loadPublicMovies();
                } else {
                    showToast('Failed to delete');
                }
            } catch (e) {
                showToast('Could not reach server');
            }
        }

        // ========== BOOT ==========
        window.onload = initDB;
    </script>
</body>
</html>
