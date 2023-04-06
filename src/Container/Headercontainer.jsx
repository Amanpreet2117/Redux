import Header from '../Component/Header'
import {connect} from 'react-redux'
// import cardItems from '../Services/Reducer/reducer'
const mapStateToProps=states=>({
    data:states.cardItems
})
const mapDispatchToProps=dispatch=>({
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home; 