(function () {
    // Create and inject styles for navbar
    const style = document.createElement('style');
    style.textContent = `
    body { padding-top: 60px; }
    .navbar {
        display: flex;
        align-items: center;
        background: var(--accent-gradient, linear-gradient(90deg, #1E293B 0%, #0F172A 100%));
        border-bottom: 2px solid var(--nav-accent, #8B5CF6);
        box-shadow: 0 4px 24px rgba(0,0,0,0.13);
        padding: 0 40px;
        height: 60px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        box-sizing: border-box;
    }
    .navbar-logo { display: flex; align-items: center; margin-right: 40px; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.12)); }
    .navbar-logo img { height: 56px; width: auto; border-radius: 50%; background: transparent; padding: 0; box-shadow: 0 2px 8px rgba(0,0,0,0.10); }
    .logo-text {
        margin-left: 14px;
        font-size: 1.35rem;
        font-weight: 900;
        letter-spacing: 2px;
        color: var(--nav-accent, #949397ff);
        text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        font-family: 'Montserrat', 'Inter', sans-serif;
        text-transform: uppercase;
        background: none;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
        background-clip: initial;
        animation: pulseLogo 1.5s infinite;
        overflow: hidden;
        white-space: nowrap;
        border-right: 2px solid var(--nav-accent, #8B5CF6);
        padding-right: 10px;
        width: 0;
    }
    @keyframes pulseLogo {
        0% { text-shadow: 0 2px 8px rgba(0,0,0,0.5); transform: scale(1); }
        50% { text-shadow: 0 4px 16px rgba(139, 92, 246, 0.4); transform: scale(1.05); }
        100% { text-shadow: 0 2px 8px rgba(0,0,0,0.5); transform: scale(1); }
    }
    @keyframes typewriter { from { width: 0; } to { width: 6ch; } }
    .typewriter-animate { animation: pulseLogo 1.5s infinite, typewriter 2.2s steps(15) 0.5s 1 normal both; }

    .navbar-menu { display: flex; gap: 40px; flex: 1; justify-content: flex-end; padding-right: 170px; }
    .navbar-menu .nav-item {
        position: relative;
        font-size: 1.18rem;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        overflow: hidden;
        height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 1.5px;
        text-shadow: 0 2px 8px rgba(0,0,0,0.13);
        border-radius: 18px;
        padding: 0 12px;
        background: rgba(255,255,255,0.05);
        box-shadow: 0 1px 6px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
        animation: pulse 1.8s infinite, floatSoft 2.8s ease-in-out infinite;
        font-family: 'Montserrat', 'Inter', sans-serif;
        // نوع الخط 
    }
      .typewriter-animate {
        animation: pulseLogo 1.5s infinite, typewriter 2.2s steps(15) 0.5s 1 normal both;
      }
    .navbar-menu .nav-item:hover { background: rgba(139, 92, 246, 0.1); box-shadow: 0 2px 16px rgba(139, 92, 246, 0.2); color: var(--nav-accent); }
    .navbar-menu .nav-item.active { background: var(--purple-gradient, linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)); color: #fff; box-shadow: 0 4px 16px rgba(139, 92, 246, 0.35); }
    .navbar-menu .nav-item.active:hover { color: #000; }

    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.2); } 70% { box-shadow: 0 0 0 12px rgba(139, 92, 246, 0.01); } 100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.2); } }
    @keyframes floatSoft { 0% { transform: translateY(0); } 50% { transform: translateY(-4px); } 100% { transform: translateY(0); } }

    @media (max-width: 900px) { .navbar { padding: 0 16px; } .navbar-menu { gap: 16px; } }
    @media (max-width: 700px) {
        .navbar { flex-direction: column; height: auto; padding: 10px; border-radius: 0 0 18px 18px; }
        .navbar-logo { margin-bottom: 10px; margin-right: 0; }
        .navbar-menu { flex-direction: column; gap: 18px; align-items: flex-start; }
        .navbar-menu .nav-item { width: 100%; justify-content: flex-start; }
    }

    /* Scrollbar to match navbar colors */
    html { scrollbar-color: #8B5CF6 #0F172A; scrollbar-width: thin; }
    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: #0F172A; }
    ::-webkit-scrollbar-thumb { background: #8B5CF6; border-radius: 8px; border: 2px solid #0F172A; box-shadow: inset 0 0 4px rgba(0,0,0,0.5); }
    ::-webkit-scrollbar-thumb:hover { background: #6D28D9; }
    /* Premium Modal Styles */
    .contact-modal {
        display: none;
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        z-index: 2000;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .contact-modal.active { display: flex; opacity: 1; }
    .contact-content {
        background: rgba(255, 255, 255, 0.07);
        padding: 60px 40px;
        border-radius: 40px;
        text-align: center;
        box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5), 
                    inset 0 0 20px rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        max-width: 500px;
        width: 85%;
        position: relative;
        transform: scale(0.7) translateY(40px);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        overflow: hidden;
    }
    .contact-content::before {
        content: '';
        position: absolute;
        top: -50%; left: -50%;
        width: 200%; height: 200%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
        z-index: -1;
        animation: rotateGlow 10s linear infinite;
    }
    @keyframes rotateGlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    .contact-modal.active .contact-content { transform: scale(1) translateY(0); }
    .footer-credit { 
        display: block; 
        font-size: 1.6rem; 
        font-weight: 900; 
        margin-bottom: 35px; 
        color: #fff; 
        text-transform: uppercase; 
        letter-spacing: 4px;
        text-shadow: 0 0 15px rgba(255,255,255,0.3);
        font-family: 'Montserrat', sans-serif;
    }
    .icons-row { display: flex; justify-content: center; gap: 25px; flex-wrap: wrap; }
    .social-icon {
        width: 65px; height: 65px;
        display: flex; align-items: center; justify-content: center;
        border-radius: 20px;
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(5px);
    }
    .social-icon:hover { 
        transform: translateY(-12px) scale(1.1) rotate(5deg); 
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }
    .facebook:hover { box-shadow: 0 15px 30px rgba(24, 119, 242, 0.4); color: #1877F2; }
    .whatsapp:hover { box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4); color: #25D366; }
    .linkedin:hover { box-shadow: 0 15px 30px rgba(10, 102, 194, 0.4); color: #0A66C2; }
    .instagram:hover { box-shadow: 0 15px 30px rgba(225, 48, 108, 0.4); color: #e1306c; }
    
    .close-modal {
        position: absolute;
        top: 25px; right: 25px;
        font-size: 1.8rem;
        color: rgba(255, 255, 255, 0.4);
        cursor: pointer;
        transition: all 0.3s;
        width: 40px; height: 40px;
        display: flex; align-items: center; justify-content: center;
        border-radius: 50%;
    }
    .close-modal:hover { 
        background: rgba(239, 68, 68, 0.2); 
        color: #EF4444; 
        transform: rotate(90deg);
    }
    `;
    document.head.appendChild(style);

    // Build modal HTML
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.id = 'contactModal';
    modal.innerHTML = `
        <div class="contact-content">
            <span class="close-modal"><i class="fas fa-times"></i></span>
            <div class="footer-icons">
                <span class="footer-credit">By Eng Ahmed Mohamed</span>
                <div class="icons-row">
                    <a href="https://web.facebook.com/ahmed.mohamed.857575" target="_blank" title="Facebook" class="social-icon facebook"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://wa.me/201159768514" target="_blank" title="WhatsApp" class="social-icon whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="https://www.linkedin.com/in/ahmed-mohamed-596713279/" target="_blank" title="LinkedIn" class="social-icon linkedin"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/ahmed_mohamed_40/?__pwa=1" target="_blank" title="Instagram" class="social-icon instagram"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Build navbar HTML
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="navbar-logo">
            <img src="Images/icon.png" alt="DC UD Logo">
            <span class="logo-text" id="cookdoor-typewriter"> DC UD</span>
        </div>
        <div class="navbar-menu">
            <a href="index.html" class="nav-item"><span>Top Achiever</span></a>
            <a href="Ahmed.html" class="nav-item"><span> Account Info </span></a>
            <a href="ahmed2.html" class="nav-item"><span>System</span></a>
            <a href="#" class="nav-item" id="contactUsBtn"><span>Contact Us</span></a>
        </div>
    `;

    document.body.prepend(nav);

    // Modal Logic
    const contactModal = document.getElementById('contactModal');
    const contactBtn = document.getElementById('contactUsBtn');
    const closeBtn = document.querySelector('.close-modal');

    contactBtn.addEventListener('click', function (e) {
        e.preventDefault();
        contactModal.classList.add('active');
    });

    closeBtn.addEventListener('click', () => contactModal.classList.remove('active'));
    window.addEventListener('click', (e) => {
        if (e.target === contactModal) contactModal.classList.remove('active');
    });

    const logoText = document.getElementById('cookdoor-typewriter');
    function restartTypewriter() {
        logoText.classList.remove('typewriter-animate');
        void logoText.offsetWidth;
        logoText.classList.add('typewriter-animate');
    }
    logoText.classList.add('typewriter-animate');
    setInterval(restartTypewriter, 15000);

    const navLinks = document.querySelectorAll('.navbar-menu .nav-item');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(function (link) {
        const linkHref = link.getAttribute('href');
        if (linkHref && (linkHref === currentPage || (linkHref.startsWith('#') && window.location.hash === linkHref))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (this.id !== 'contactUsBtn') {
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                this.classList.add('active');
            }
        });
    });
})();
