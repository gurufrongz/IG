import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
      //BEM naming convention
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt="siraphat"
        />
        <h1>Siraphat</h1>
      </div>

      <div className="app__videos">
      
      <VideoCard
      channel='AdopTzPwGOD'
      avatarSrc='https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/107842421_2667973340129504_2250674154371402536_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGJPji405iMjnp4F_QeanVQcGcp-AGh_dtwZyn4AaH926HLM1Vnfnntvk8stWVovMD3h-YUlq-s83cM30LLNecW&_nc_ohc=xr9FYA4eqooAX-A7oFa&_nc_ht=scontent.fbkk22-2.fna&oh=e4e60cfdfee02379165550798a27c624&oe=5F7C5C57'      
      song='-AdopTzPwGOD'      
      url="https://youtu.be/_EPgZjMcQVk"
      likes={'10M'}
      shares={'500K'}
      />

<VideoCard
      channel='AdopTzPwGOD'
      avatarSrc='https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/107842421_2667973340129504_2250674154371402536_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGJPji405iMjnp4F_QeanVQcGcp-AGh_dtwZyn4AaH926HLM1Vnfnntvk8stWVovMD3h-YUlq-s83cM30LLNecW&_nc_ohc=xr9FYA4eqooAX-A7oFa&_nc_ht=scontent.fbkk22-2.fna&oh=e4e60cfdfee02379165550798a27c624&oe=5F7C5C57'      
      song='-AdopTzPwGOD'      
      url="https://youtu.be/_EPgZjMcQVk"    
      likes={'10M'}
      shares={'500K'}
      />

<VideoCard
      channel='AdopTzPwGOD'
      avatarSrc='https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/107842421_2667973340129504_2250674154371402536_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeGJPji405iMjnp4F_QeanVQcGcp-AGh_dtwZyn4AaH926HLM1Vnfnntvk8stWVovMD3h-YUlq-s83cM30LLNecW&_nc_ohc=xr9FYA4eqooAX-A7oFa&_nc_ht=scontent.fbkk22-2.fna&oh=e4e60cfdfee02379165550798a27c624&oe=5F7C5C57'      
      song='-AdopTzPwGOD'      
      url="https://youtu.be/_EPgZjMcQVk"    
      likes={'10M'}
      shares={'500K'}
      />
      </div>
    </div>
  );
}

export default App;
