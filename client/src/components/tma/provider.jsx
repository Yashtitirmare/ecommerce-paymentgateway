"use client";

import React, { useState, useEffect } from 'react';
import { SDKProvider, retrieveLaunchParams } from '@tma.js/sdk-react';
import TTmaContext from './context';

function TmaProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [telegramUser, setTelegramUser] = useState(null);

  useEffect(() => {
    const fetchTelegramUser = async () => {
      try {
        const launchParams = retrieveLaunchParams();
        const user = launchParams?.initData?.user;
        if (!user) {
          throw new Error('User not found');
        }
        setTelegramUser(user);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTelegramUser();
  }, []);

  if (isLoading) {
    return <TmaLoadingComponent />;
  }

  if (error) {
    return <TmaErrorComponent />;
  }

  return (
    <SDKProvider acceptCustomStyles debug>
      <TTmaContext.Provider value={{ user: telegramUser }}>
        {props.children}
      </TTmaContext.Provider>
    </SDKProvider>
  );
}

function TmaLoadingComponent() {
  return <div>Loading...</div>;
}

function TmaErrorComponent() {
  return <div>Failed to load Telegram user. Make sure the Telegram app is open.</div>;
}

export default TmaProvider;
