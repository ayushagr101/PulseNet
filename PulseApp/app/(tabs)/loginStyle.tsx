import { StyleSheet, Platform } from 'react-native';

export const loginStyle = StyleSheet.create({
  // Header Styles
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  
  // Form Styles
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  inputError: {
    borderColor: '#ff4444',
  },
  
  // Password Input Styles
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingRight: 50,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  eyeText: {
    fontSize: 18,
  },
  
  // Error and Validation Styles
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    marginTop: 4,
  },
  
  // Forgot Password Styles
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '500',
  },
  
  // Button Styles
  loginButton: {
    backgroundColor: '#007bff',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonDisabled: {
    backgroundColor: '#ccc',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Demo Credentials Styles
  demoCredentials: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  demoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,
  },
  demoText: {
    fontSize: 12,
    color: '#6c757d',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
});