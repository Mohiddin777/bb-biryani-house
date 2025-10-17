PWA v3 - The BB (BackBenchers) Biryani House

This version includes Firebase integration and an admin panel protected by a client-side password.

Admin password: BB2026_47

-- Quick test / local server --
1. Unzip the folder.
2. Run: python -m http.server 8000
3. Open: http://localhost:8000

-- Replace images with high-quality (recommended) --
Below are curated royalty-free images from Unsplash/Pexels. Download them into the images/ folder and replace the placeholders.

Suggested image search pages:
- Unsplash chicken biryani: https://unsplash.com/s/photos/chicken-biryani
- Unsplash biryani closeup: https://unsplash.com/s/photos/biryani
- Pexels biryani search: https://www.pexels.com/search/biryani/

Example wget commands (replace IMAGE_URL with the direct image link from Unsplash/Pexels):
 wget -O images/biryani1.jpg "IMAGE_URL"
 wget -O images/biryani2.jpg "IMAGE_URL"
 wget -O images/biryani3.jpg "IMAGE_URL"
 wget -O images/biryani4.jpg "IMAGE_URL"

-- Firebase setup recap --
1. In Firebase Console, ensure Firestore is enabled.
2. Firestore rules (for testing only):
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{doc} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}

-- Deploy to GitHub Pages --
1. git init, add, commit, push to your repo.
2. In Github repo settings -> Pages -> choose main branch / root.
3. Visit the provided URL.

-- Notes --
- For production, replace client-side admin with Firebase Auth & secure Firestore rules.
- Download and serve images locally to avoid hotlink limits.
