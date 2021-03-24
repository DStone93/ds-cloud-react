import React from 'react';
import {MainLayout} from './MainLayout'
import { HeaderNav } from './NavBar/NavigationBar';

export function HomePage (props: {}){

    let background = {
        header: {
          background: 'rgba(0, 0, 0, 0.5)',
          backgroundImage:
            'url(https://img5.goodfon.com/wallpaper/nbig/3/98/abstraktnyi-geometricheskii-linii-background-fon.jpg)',
          height: '100vh',
    
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
    
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      };

    return (
        <MainLayout>
            <div style={background.header}>
                <p className="forFun">
                    Hello World!
                </p>
            </div>
        </MainLayout>
        
        
    )
}

