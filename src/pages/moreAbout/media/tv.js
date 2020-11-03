import React from 'react';
import TV from '../../../components/Television/TV';
import { useLocation } from '@reach/router';

function TvWrapper() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const initialTab = params.get('activeTab');
  
  return <TV initialTab={initialTab} />;
}

export default TvWrapper;
