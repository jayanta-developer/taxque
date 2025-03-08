import axios from "axios";

const BASE_URL = "http://localhost:5000/taxque/api";

// Send OTP
export const sendOTP = async (email: string) => {
  return axios.post(`${BASE_URL}/send-otp`, { email });
};

// Verify OTP
export const verifyOTP = async (email: string, otp: string) => {
  return axios.post(`${BASE_URL}/verify-otp`, { email, otp });
};

// Google Login
export const googleLogin = async () => {
  window.location.href = `${BASE_URL}/google`;
};

// Facebook Login
export const facebookLogin = async () => {
  window.location.href = `${BASE_URL}/facebook`; // Redirect to Facebook OAuth
};

// LinkedIn Login
export const linkedInLogin = async () => {
  window.location.href = `${BASE_URL}/linkedin`; // Redirect to LinkedIn OAuth
};
