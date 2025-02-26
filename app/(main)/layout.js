import React from 'react'

const MainLayout = ({children}) => {
  return <div className='container mx-auto my-32'>{children}</div>;
};

// Inside your dashboard's main JSX
// {/* <div>
//   {/* ... other dashboard elements ... */}
//   <TrafficGuidelinesCard />
//   {/* ... other dashboard elements ... */}
// </div>
//  */}


export default MainLayout;
