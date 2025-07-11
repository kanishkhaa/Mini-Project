import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Phone, Eye, EyeOff, ArrowRight, Sparkles, Shield, Zap, Star, Lock } from 'lucide-react';
import Lottie from 'lottie-react';
import Signup from '../assets/login.json';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState('');
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (!window.google || !window.google.accounts) {
        console.error('Google Sign-In library not loaded');
        setError('Google Sign-In unavailable. Please try again later.');
        return;
      }
      console.log('Initializing Google Sign-In');
      window.google.accounts.id.initialize({
        client_id: '1097134711592-6pcl2bcteea0cssn7m3ppps77saut4t4.apps.googleusercontent.com',
        callback: handleGoogleCallback,
      });
      const googleDiv = document.getElementById('googleSignInDiv');
      if (googleDiv) {
        window.google.accounts.id.renderButton(googleDiv, {
          theme: 'outline',
          size: 'large',
          width: 300,
        });
        console.log('Google Sign-In button rendered');
      } else {
        console.error('Google Sign-In div not found');
      }
    };

    if (window.google && window.google.accounts) {
      initializeGoogleSignIn();
    } else {
      console.log('Loading Google Sign-In script');
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('Google Sign-In script loaded');
        initializeGoogleSignIn();
      };
      script.onerror = () => {
        console.error('Failed to load Google Sign-In script');
        setError('Failed to load Google Sign-In. Check your network.');
      };
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  const handleGoogleCallback = async (response) => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:3000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: response.credential }),
      });
      const userData = await res.json();
      if (res.ok) {
        console.log('Google Sign-In successful:', userData);
        localStorage.setItem('user', JSON.stringify(userData));
        alert('Account created successfully with Google!');
        navigate('/profileform');
      } else {
        setError(userData.message || 'Google Sign-In failed');
        console.error('Google Sign-In error:', userData);
      }
    } catch (error) {
      console.error('Google Sign-In error:', error.message, error.stack);
      setError('Failed to connect to server. Is the backend running?');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;
          if (newX < 0 || newX > window.innerWidth) p.speedX *= -1;
          if (newY < 0 || newY > window.innerHeight) p.speedY *= -1;
          return { ...p, x: newX, y: newY };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent any unintended event bubbling
    console.log('handleSubmit triggered', formData); // Debug log
    const { email, password, confirmPassword, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError('Enter a valid email');
      console.log('Validation failed: Invalid email');
      return;
    }
    if (!password || !confirmPassword) {
      setError('Password fields required');
      console.log('Validation failed: Password fields missing');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      console.log('Validation failed: Passwords do not match');
      return;
    }

    setIsLoading(true);
    try {
      console.log('Sending POST request to /api/auth/signup'); // Debug log
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, password }),
      });
      console.log('Response received:', res.status, res.statusText); // Debug log
      const data = await res.json();
      if (res.ok) {
        console.log('Signup successful:', data);
        localStorage.setItem('user', JSON.stringify(data));
        alert('Account created successfully!');
        navigate('/profileform');
      } else {
        setError(data.message || 'Signup failed');
        console.log('Signup failed:', data.message);
      }
    } catch (err) {
      console.error('Signup error:', err.message, err.stack);
      setError('Signup failed: Server unreachable');
    } finally {
      setIsLoading(false);
      console.log('isLoading set to false');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 flex relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-20 animate-wave">
          <path
            d="M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 L1800,800 L0,800 Z"
            fill="url(#waveGradient)"
          >
            <animate
              attributeName="d"
              values="
                M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 L1800,800 L0,800 Z;
                M0,300 C300,200 600,400 900,300 C1200,200 1500,400 1800,300 L1800,800 L0,800 Z;
                M0,200 C300,100 600,300 900,200 C1200,100 1500,300 1800,200 L1800,800 L0,800 Z"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#bae6fd', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#bfdbfe', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/30 to-sky-300/30 rounded-full blur-3xl animate-pulse"
          style={{ left: mousePosition.x * 0.02 + 'px', top: mousePosition.y * 0.02 + 'px' }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-slate-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-sky-200/25 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-blue-300/50 rounded-full"
            style={{ left: p.x + 'px', top: p.y + 'px', width: p.size + 'px', height: p.size + 'px' }}
          ></div>
        ))}
      </div>

      <div className="w-1/2 flex items-center justify-center p-12 relative">
        <div className="w-full max-w-lg relative">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-blue-200/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 to-sky-300/10 animate-pulse-slow"></div>
            <div className="text-center mb-10 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 via-sky-500 to-blue-500 rounded-2xl mb-6 shadow-xl animate-bounce-slow">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 bg-clip-text text-transparent mb-3 animate-gradient-text">
                Create Account
              </h1>
              <p className="text-slate-600 text-sm font-medium flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" /> Join SchemeAI securely
              </p>
            </div>
            <div id="googleSignInDiv" className="flex justify-center mb-4 min-h-[50px]"></div>
            <div className="flex items-center justify-center my-2">
              <span className="text-gray-500">or</span>
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center mb-4">{error}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border border-blue-200/40 rounded-xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 pl-12 text-slate-700 placeholder-slate-500 text-sm font-medium"
                    required
                  />
                  <Mail
                    className={`absolute left-4 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-blue-500' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-sky-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border border-blue-200/40 rounded-xl focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 pl-12 text-slate-700 placeholder-slate-500 text-sm font-medium"
                  />
                  <Phone
                    className={`absolute left-4 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'phone' ? 'text-blue-500' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border border-blue-200/40 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all duration-300 pl-12 pr-12 text-slate-700 placeholder-slate-500 text-sm font-medium"
                    required
                  />
                  <Lock
                    className={`absolute left-4 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'password' ? 'text-sky-500' : 'text-slate-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3 text-slate-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('confirmPassword')}
                    onBlur={() => setFocusedField('')}
                    className="w-full px-5 py-3 bg-white/70 backdrop-blur-sm border border-blue-200/40 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400/50 transition-all duration-300 pl-12 pr-12 text-slate-700 placeholder-slate-500 text-sm font-medium"
                    required
                  />
                  <Lock
                    className={`absolute left-4 top-3 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'confirmPassword' ? 'text-sky-500' : 'text-slate-400'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-3 text-slate-500 hover:text-blue-600 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                onClick={() => console.log('Signup button clicked')} // Debug log
                className="w-full bg-gradient-to-r from-blue-400 via-sky-500 to-blue-500 text-white py-4 px-6 rounded-full hover:from-blue-500 hover:via-sky-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm z-10"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                ) : (
                  <>
                    Sign Up
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
            <div className="text-center mt-6 space-y-3">
              <div className="text-slate-600 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-600 hover:underline transition-colors duration-300 font-semibold">
                  Sign In
                </Link>
              </div>
            </div>
            <Star className="absolute -top-2 -right-2 w-5 h-5 text-blue-400 animate-pulse" />
            <Star className="absolute top-1/4 -left-4 w-3 h-3 text-sky-400 animate-pulse delay-500" />
            <Star className="absolute bottom-1/4 -right-6 w-5 h-5 text-blue-500 animate-pulse delay-1000" />
            <Zap className="absolute -bottom-4 -left-2 w-6 h-6 text-blue-400/40 animate-bounce-slow" />
            <Shield className="absolute bottom-4 left-6 w-5 h-5 text-sky-400 animate-pulse delay-300" />
          </div>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center relative overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-sky-200/40 rounded-full blur-3xl scale-125 animate-pulse-slow"></div>
          <div className="relative w-[28rem] h-[28rem] bg-white/60 backdrop-blur-xl rounded-3xl border border-blue-200/30 shadow-2xl flex items-center justify-center overflow-hidden">
            <Lottie animationData={Signup} loop={true} autoplay={true} style={{ height: 400, width: 400 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100/10 to-transparent"></div>
          </div>
          <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-blue-400/40 rounded-full animate-spin-slow"></div>
          <div className="absolute -top-4 -right-8 w-8 h-8 border-4 border-sky-400/40 rounded-lg animate-pulse"></div>
          <div className="absolute -bottom-6 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400/30 to-sky-500/30 rounded-full animate-bounce-slow"></div>
          <div className="absolute -bottom-4 -right-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-sky-600 rounded-full animate-ping"></div>
          <Star className="absolute top-10 left-10 w-5 h-5 text-blue-400 animate-twinkle" />
          <Zap className="absolute bottom-10 right-10 w-6 h-6 text-sky-400 animate-pulse" />
        </div>
      </div>
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          @keyframes wave {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          .animate-wave {
            animation: wave 10s ease-in-out infinite;
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          .animate-twinkle {
            animation: twinkle 2s ease-in-out infinite;
          }
          @keyframes gradient-text {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-text 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SignUpPage;