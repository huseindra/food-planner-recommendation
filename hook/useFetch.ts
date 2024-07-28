import { useState, useEffect, useCallback } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://172.16.63.88:8000';

async function useFetch(url: string, options = {}) {
    try {
      const response = await fetch(`${BASE_URL}${url}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  
  export default useFetch;
