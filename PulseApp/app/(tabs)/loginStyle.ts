import { StyleSheet, Platform } from 'react-native';

export const loginStyle = StyleSheet.create({
  // Loading Screen Styles
  loadingContainer: {
    flex: 1,
    backgroundColor: '#87CEEB', // Sky blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  roadContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    marginBottom: 50,
  },
  road: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#333',
  },
  roadLines: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  roadLine: {
    width: 30,
    height: 4,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  ambulance: {
    position: 'absolute',
    bottom: 80,
    width: 120,
    height: 60,
  },
  ambulanceBody: {
    flex: 1,
    position: 'relative',
  },
  ambulanceMain: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dc3545',
  },
  ambulanceText: {
    fontSize: 24,
  },
  ambulanceDetails: {
    position: 'absolute',
    top: 5,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  redCross: {
    width: 20,
    height: 20,
    backgroundColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginRight: 5,
  },
  crossText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ambulanceWindow: {
    width: 15,
    height: 10,
    backgroundColor: '#87CEEB',
    borderRadius: 2,
  },
  frontWheel: {
    position: 'absolute',
    bottom: -10,
    right: 15,
    width: 20,
    height: 20,
  },
  backWheel: {
    position: 'absolute',
    bottom: -10,
    left: 15,
    width: 20,
    height: 20,
  },
  wheel: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    borderWidth: 2,
    borderColor: '#666',
  },
  smoke: {
    position: 'absolute',
    bottom: -15,
    left: -20,
    width: 60,
    height: 20,
  },
  smokeText: {
    fontSize: 16,
    opacity: 0.7,
  },
  loadingTextContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loadingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc3545',
    marginBottom: 8,
    textAlign: 'center',
  },
  loadingSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  spinner: {
    marginTop: 10,
  },
  
  // Main Login Container Styles
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  loginContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  
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