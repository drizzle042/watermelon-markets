import styles from './styles/styles.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from './components/SearchBar';
import Tab from './components/SalesTab';
import SalesLogic from './SalesLogic/SalesLogic';
import FetchError from '../../Lib/Components/FetchError';
import FeedBack from '../../Lib/Components/Feedback';


const Sales = () => {

    const { salesLogic } = SalesLogic();

    return ( 
        <div className={styles.page}>
            {
                salesLogic.FetchSalesDataLoading && 
                <div 
                className={styles.mainLoader}>
                    <CircularProgress />
                </div>
            }
            {
                salesLogic.FetchSalesDataError && 
                <FetchError
                error={salesLogic.FetchSalesDataError}
                reFetch={salesLogic.reFetch} />
            }
            {
                salesLogic.SalesData &&
                <>
                    <SearchBar
                    styles={styles}
                    salesLogic={salesLogic} />
                    <div className={styles.tab_panel}>
                        <Tab 
                        styles={styles}
                        salesLogic={salesLogic} />
                    </div>
                </>
            }
            <FeedBack
            message={salesLogic.ActivateSaleMessage}
            setMessage={salesLogic.SetActivateSaleMessage}
            severity={salesLogic.ActivateSaleMessageSeverity} />
        </div>
    );
}
 
export default Sales;