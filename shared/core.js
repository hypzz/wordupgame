// WordUp Game Engine - Core.js
// Version: 2.1 - Added Dynamic Back Button

// ===================================
// DYNAMIC BACK BUTTON INJECTION
// ===================================
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackButton);
    } else {
        initBackButton();
    }
    
    function initBackButton() {
        // Detect which archive page to link to based on current URL
        const currentPath = window.location.pathname;
        let archivePage = '../archive-cybersecurity.html'; // default
        
        // Determine archive page based on folder/path patterns
        if (currentPath.includes('pm-') || currentPath.includes('/pm/')) {
            archivePage = '../archive-pm.html';
        } else if (currentPath.includes('accounting-') || currentPath.includes('/accounting/')) {
            archivePage = '../archive-accounting.html';
        } else if (currentPath.includes('cybersec-') || currentPath.includes('analyst-') || currentPath.includes('/cybersecurity/')) {
            archivePage = '../archive-cybersecurity.html';
        }
        
        // Find the existing help button
        const helpBtn = document.getElementById('help-btn');
        if (!helpBtn) {
            console.warn('Help button not found');
            return;
        }
        
        // Check if buttons container already exists (avoid duplicates)
        if (document.querySelector('.top-nav-buttons')) {
            return; // Already exists, don't create again
        }
        
        // Create the container for navigation buttons
        const navContainer = document.createElement('div');
        navContainer.className = 'top-nav-buttons';
        
        // Create back button
        const backBtn = document.createElement('a');
        backBtn.href = archivePage;
        backBtn.className = 'back-btn';
        backBtn.title = 'Back to puzzles';
        backBtn.innerHTML = '←';
        
        // Add buttons to container
        navContainer.appendChild(backBtn);
        
        // Move help button into container
        helpBtn.parentNode.removeChild(helpBtn);
        navContainer.appendChild(helpBtn);
        
        // Insert at the beginning of body
        document.body.insertBefore(navContainer, document.body.firstChild);
    }
})();

// ===================================
// EXISTING GAME ENGINE CODE BELOW
// ===================================

// (Rest of your existing core.js code goes here)
// This just adds the back button functionality at the top
// without affecting any existing game logic
