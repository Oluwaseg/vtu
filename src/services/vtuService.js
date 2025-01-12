const axios = require('axios');

class VTUService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.MOBILE_VTU_API_URL,
      headers: {
        'Authorization': `Bearer ${process.env.MOBILE_VTU_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async buyAirtime(phoneNumber, amount, provider) {
    try {
      const response = await this.apiClient.post('/airtime', {
        phone: phoneNumber,
        amount,
        network: provider
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to process airtime purchase');
    }
  }

  async buyDataBundle(phoneNumber, bundleCode, provider) {
    try {
      const response = await this.apiClient.post('/data', {
        phone: phoneNumber,
        bundle: bundleCode,
        network: provider
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to process data bundle purchase');
    }
  }
}

module.exports = new VTUService();