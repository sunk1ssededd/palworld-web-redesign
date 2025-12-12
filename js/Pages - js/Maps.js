// document.addEventListener('DOMContentLoaded', () => {

//     const viewport = document.getElementById('mapViewport');
//     const content = document.getElementById('mapContent');

//     // === CONFIG ===
//     let state = {
//         scale: 0.6, // Zoom awal mobile friendly
//         panning: false,
//         pointX: 0,
//         pointY: 0,
//         startX: 0,
//         startY: 0
//     };

//     // Limits
//     const minScale = 0.2;
//     const maxScale = 4.0;

//     // Center map on load
//     const mapWidth = 2000; // Sesuaikan dengan width CSS .map-image
//     const mapHeight = 2000; // Estimasi
//     state.pointX = (window.innerWidth - mapWidth * state.scale) / 2;
//     state.pointY = (window.innerHeight - mapHeight * state.scale) / 2;

//     updateTransform();

//     function updateTransform() {
//         content.style.transform = `translate(${state.pointX}px, ${state.pointY}px) scale(${state.scale})`;
//     }

//     // ============================
//     // MOUSE EVENTS (Desktop)
//     // ============================
//     viewport.addEventListener('mousedown', (e) => {
//         if (e.button !== 0) return;
//         e.preventDefault();
//         state.panning = true;
//         state.startX = e.clientX - state.pointX;
//         state.startY = e.clientY - state.pointY;
//         viewport.style.cursor = 'grabbing';
//     });

//     window.addEventListener('mouseup', () => {
//         state.panning = false;
//         viewport.style.cursor = 'grab';
//     });

//     window.addEventListener('mousemove', (e) => {
//         if (!state.panning) return;
//         e.preventDefault();
//         state.pointX = e.clientX - state.startX;
//         state.pointY = e.clientY - state.startY;
//         updateTransform();
//     });

//     // ============================
//     // TOUCH EVENTS (Mobile - Android/iOS)
//     // ============================
//     viewport.addEventListener('touchstart', (e) => {
//         if (e.touches.length === 1) { // Single finger drag
//             state.panning = true;
//             state.startX = e.touches[0].clientX - state.pointX;
//             state.startY = e.touches[0].clientY - state.pointY;
//         }
//     }, { passive: false });

//     window.addEventListener('touchend', () => {
//         state.panning = false;
//     });

//     viewport.addEventListener('touchmove', (e) => {
//         if (!state.panning || e.touches.length !== 1) return;
//         // Prevent pull-to-refresh on mobile
//         if(e.cancelable) e.preventDefault();

//         state.pointX = e.touches[0].clientX - state.startX;
//         state.pointY = e.touches[0].clientY - state.startY;
//         updateTransform();
//     }, { passive: false });

//     // ============================
//     // ZOOM LOGIC
//     // ============================
//     const handleZoom = (direction) => {
//         const step = 0.3;
//         const newScale = state.scale + (direction * step);

//         if (newScale >= minScale && newScale <= maxScale) {
//             // Simple center zoom adjustment
//             const rect = viewport.getBoundingClientRect();
//             const centerX = rect.width / 2;
//             const centerY = rect.height / 2;

//             // Math to zoom towards center
//             state.pointX -= (centerX - state.pointX) * (step / state.scale) * direction;
//             state.pointY -= (centerY - state.pointY) * (step / state.scale) * direction;

//             state.scale = newScale;
//             updateTransform();
//         }
//     };

//     document.getElementById('zoomIn').onclick = () => handleZoom(1);
//     document.getElementById('zoomOut').onclick = () => handleZoom(-1);

//     document.getElementById('resetView').onclick = () => {
//         state.scale = 0.6;
//         state.pointX = (window.innerWidth - mapWidth * state.scale) / 2;
//         state.pointY = (window.innerHeight - mapHeight * state.scale) / 2;
//         updateTransform();
//     };

//     // Scroll Wheel Zoom
//     viewport.addEventListener('wheel', (e) => {
//         e.preventDefault();
//         const direction = e.deltaY > 0 ? -1 : 1;
//         handleZoom(direction * 0.5); // Smoother wheel zoom
//     }, { passive: false });
// });
