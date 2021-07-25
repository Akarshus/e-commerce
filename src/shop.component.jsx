import React from 'react'
import SHOP_DATA from './shop.data'
import Preview from './component/menu/preview/preview'

class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections:SHOP_DATA
        }

    }

    render(){
        return(
        <>
            <div className='shop-page'>
                {
                    this.state.collections.map(({id, ...othercomp})=>{
                        return <Preview key={id}{...othercomp} />
                    })
                }
            </div>
        </>
        )
    }
}

export default ShopPage;