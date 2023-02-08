import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
      const error = useRouteError


      const styles = {
            display: "flex",
            flexDirection: "column",
            gap:"5rem",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh"
      }
  return (
    <div style={styles}>
      <h6 style={{fontSize: "4rem"}}>Oops!</h6>
      <p>Somthing Went Wrong</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorElement