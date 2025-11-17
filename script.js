 // Create floating hearts
        // Create floating hearts
        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartCount = 20;

            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');

                // Random size
                const size = Math.random() * 20 + 15; // 15–35px
                heart.style.setProperty('--heart-size', `${size}px`);

                // Random pink shades
                const colors = [
                    { h: 210, s: 85, l: 60 }, // blue
                    { h: 350, s: 80, l: 60 }  // red/pinkish
                ];

                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                const color = `hsl(${randomColor.h}, ${randomColor.s}%, ${randomColor.l}%)`;

                heart.style.setProperty('--heart-color', color);

                // Random position
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.top = `${Math.random() * 100}%`;

                // Animation
                heart.style.animation = `float ${Math.random() * 10 + 8}s linear infinite`;

                heartsContainer.appendChild(heart);
            }
        }

        
        // Surprise modal functionality
        document.getElementById('surpriseBtn').addEventListener('click', function() {
            document.getElementById('surpriseModal').classList.add('active');
            
            // Add confetti effect
            createConfetti();
        });
        
        document.getElementById('closeModal').addEventListener('click', function() {
            document.getElementById('surpriseModal').classList.remove('active');
        });
        
        // Confetti effect
        function createConfetti() {
            const confettiContainer = document.createElement('div');
            confettiContainer.style.position = 'fixed';
            confettiContainer.style.top = '0';
            confettiContainer.style.left = '0';
            confettiContainer.style.width = '100%';
            confettiContainer.style.height = '100%';
            confettiContainer.style.pointerEvents = 'none';
            confettiContainer.style.zIndex = '999';
            document.body.appendChild(confettiContainer);
            
            const colors = ['#e84393', '#fd79a8', '#a29bfe', '#74b9ff', '#ffeaa7'];
            const confettiCount = 150;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.style.position = 'absolute';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '0';
                
                // Random position at top
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = '-10px';
                
                // Random rotation
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                confettiContainer.appendChild(confetti);
                
                // Animation
                const animation = confetti.animate([
                    { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                    { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 3000 + 2000,
                    easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
                });
                
                // Remove confetti after animation
                animation.onfinish = () => {
                    confetti.remove();
                };
            }
            
            // Remove container after all confetti is gone
            setTimeout(() => {
                confettiContainer.remove();
            }, 5000);
        }
        
        // Photo click effect
        document.querySelectorAll('.photo').forEach(photo => {
            photo.addEventListener('click', function() {
                this.style.transform = 'scale(1.2)';
                this.style.zIndex = '10';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.zIndex = '1';
                }, 1000);
            });
        });
        
        // Initialize everything when page loads
        window.addEventListener('load', function() {
            createHearts();
            
            // Add typewriter effect to message
            const messageContent = document.querySelector('.message-content');
            const originalText = messageContent.innerHTML;
            messageContent.innerHTML = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    messageContent.innerHTML += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30);
                }
            };
            
            // Start typewriter effect after a short delay
            setTimeout(typeWriter, 1000);
        });

        // Show popup when page loads
window.onload = function() {
    document.getElementById("entryPopup").style.display = "flex";
};

// When user clicks Enter
document.getElementById("enterBtn").addEventListener("click", function() {
    const popup = document.getElementById("entryPopup");
    const song = document.getElementById("music");

    popup.style.display = "none";   // hide popup
    song.play();                    // play music
});
