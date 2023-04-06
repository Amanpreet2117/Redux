import React from 'react'
import {connect} from 'react-redux'
import Home from '../Component/Home'
import addtocard from '../Services/Action/Action'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addtocard(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;