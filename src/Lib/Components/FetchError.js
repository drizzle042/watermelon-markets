import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import internetError from "../assets/internetConnection.png"

const FetchError = ({error, reFetch}) => {
    return ( 
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto"
        }}>
            <img
            style={{
                width: "20rem",
                margin: "auto"
            }} 
            src={internetError} 
            alt="no internet" />
            <Typography
            style={{
                textAlign: "center", 
                padding: "0.2rem", 
                color: "crimson", 
                fontWeight: "bolder"
            }}>{ error?.message }</Typography>
            {
                window.navigator.onLine ?
                    <Button
                    sx={{
                        textTransform: "none",
                        fontSize: '2rem',
                        padding: 0,
                        lineHeight: 1.5,
                        margin: '5px',
                        backgroundColor: "#1F53D7",
                        border: "1px",
                        minWidth: "100px",
                        color: "#fff"
                    }}
                    onClick={() => {
                        reFetch ? 
                        reFetch() :
                        window.location.reload()
                    }}>
                        Reload
                    </Button> :
                    ""
            }
        </div>
     );
}
 
export default FetchError;