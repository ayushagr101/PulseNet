import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { loginStyle } from './loginStyle';

interface LoginForm {
  email: string;
  password: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
}

const LoginApp: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof LoginForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock authentication logic
      if (form.email === 'user@example.com' && form.password === 'password123') {
        Alert.alert('Success', 'Login successful!', [
          { text: 'OK', onPress: () => console.log('User logged in') }
        ]);
      } else {
        Alert.alert('Error', 'Invalid credentials. Try user@example.com / password123');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Password reset link would be sent to your email.');
  };

  return (
    <SafeAreaView style={loginStyle.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={loginStyle.keyboardView}
      >
        <ScrollView
          contentContainerStyle={loginStyle.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={loginStyle.loginContainer}>
            {/* Header */}
            <View style={loginStyle.header}>
              <Text style={loginStyle.title}>Welcome Back</Text>
              <Text style={loginStyle.subtitle}>Sign in to your account</Text>
            </View>

            {/* Login Form */}
            <View style={loginStyle.form}>
              {/* Email Input */}
              <View style={loginStyle.inputContainer}>
                <Text style={loginStyle.label}>Email</Text>
                <TextInput
                  style={[
                    loginStyle.input,
                    errors.email && loginStyle.inputError
                  ]}
                  value={form.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                  placeholder="Enter your email"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                {errors.email && (
                  <Text style={loginStyle.errorText}>{errors.email}</Text>
                )}
              </View>

              {/* Password Input */}
              <View style={loginStyle.inputContainer}>
                <Text style={loginStyle.label}>Password</Text>
                <View style={loginStyle.passwordContainer}>
                  <TextInput
                    style={[
                      loginStyle.passwordInput,
                      errors.password && loginStyle.inputError
                    ]}
                    value={form.password}
                    onChangeText={(text) => handleInputChange('password', text)}
                    placeholder="Enter your password"
                    placeholderTextColor="#999"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    editable={!isLoading}
                  />
                  <TouchableOpacity
                    style={loginStyle.eyeButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={loginStyle.eyeText}>
                      {showPassword ? '🙈' : '👁️'}
                    </Text>
                  </TouchableOpacity>
                </View>
                {errors.password && (
                  <Text style={loginStyle.errorText}>{errors.password}</Text>
                )}
              </View>

              {/* Forgot Password */}
              <TouchableOpacity 
                style={loginStyle.forgotPassword}
                onPress={handleForgotPassword}
                disabled={isLoading}
              >
                <Text style={loginStyle.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity
                style={[
                  loginStyle.loginButton,
                  isLoading && loginStyle.loginButtonDisabled
                ]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <Text style={loginStyle.loginButtonText}>Sign In</Text>
                )}
              </TouchableOpacity>

              {/* Demo Credentials */}
              <View style={loginStyle.demoCredentials}>
                <Text style={loginStyle.demoTitle}>Demo Credentials:</Text>
                <Text style={loginStyle.demoText}>Email: user@example.com</Text>
                <Text style={loginStyle.demoText}>Password: password123</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginApp;