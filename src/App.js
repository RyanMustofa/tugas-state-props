import React from 'react';
import Button from './component/Button';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    nama:'Ryan',
                    warna:'blue'
                },
                {
                    nama:'Bibit',
                    warna:'pink'
                },
                {
                    nama:'Ardhi',
                    warna:'red'
                },
                {
                    nama:'Chandra',
                    warna:'grey'
                },
                {
                    nama:'Walid N',
                    warna: 'aquamarine'
                },
                {
                    nama:'waizal',
                    warna:'green'
                }
            ]
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.data.map((params,i)=> { 
                        return <Button warna={params.warna}>{params.nama}</Button>
                })
                }
            </div>
        )
    }
}

export default App;
