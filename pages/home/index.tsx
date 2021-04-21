// import dynamic from 'next/dynamic'
// import { useState } from 'react';

// const DynamicComponentWithCustomLoading = dynamic(
//   () => import('../../components/hello'),
//   { loading: () => <p>I am sleeping, please wait...</p> }
// )

function Home() {
  // const [entry, setEntry] = useState<number>(-1);

  // setTimeout(() => {
  //   setEntry(1);
  // }, 5000);

  return (
    <div>
      {/* <DynamicComponentWithCustomLoading /> */}
      <p>This is my homepage, ready to go!</p>
    </div>
  )
}

export default Home