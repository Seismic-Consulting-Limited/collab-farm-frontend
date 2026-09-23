import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'
import { Input } from './Input'
import sms from '../../assets/sms.svg'
import eyeSlash from '../../assets/eyeSlash.svg'
import { Submit_Bttn } from './Submit_Bttn';
import { Divider } from './Divider';
import { Login_Direct } from './Login_Direct'
import { loginUser, storeAuthToken } from '../../services/auth';

export const Login_Form = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setApiError('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setApiError('');

    try {
      const response = await loginUser(formData.username, formData.password);
      
      // Store the access token
      if (response.access_token) {
        storeAuthToken(response.access_token);
      }
      
      // Redirect to dashboard - ProtectedRoute will handle onboarding check
      navigate('/dashboard');
    } catch (error) {
      setApiError(error.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='w-full'>
      <Header title='Welcome Back' subtitle='Join CollabFarm today to meet up with certified farmers across the country '/> 
      <div className="mt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* API Error Message */}
          {apiError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              {apiError}
            </div>
          )}
          
          <Input 
            label='Email *' 
            placeholder='youremail@gmail.com' 
            icon={sms} 
            type='email' 
            autoComplete='email' 
            htmlFor='email'
            name='username'
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <div>
            <Input 
              label='Password *' 
              placeholder='input your password' 
              onIconClick={() => setShowPassword(!showPassword)} 
              icon={eyeSlash} 
              type={showPassword ? 'text': 'password'} 
              autoComplete='current-password' 
              htmlFor='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>
          <div className="pt-2">
            <Submit_Bttn tag={loading ? 'Logging in...' : 'Login'} disabled={loading}/>
          </div>
        </form>
      </div>
      <Divider/>
      <Login_Direct/>
    </div>
  )
}
