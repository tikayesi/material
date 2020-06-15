import React from 'react';
import {downloadReportService} from "./api/fileTransaction";

class App extends React.Component {
    onReportDownload = async (nama) => {
        const response = await downloadReportService();
        const blob = await response.blob();
        var fileURL = window.URL.createObjectURL(new Blob([blob], {type: "application/pdf"}));
        window.open( window.URL.createObjectURL(fileURL) );
        this.setState({message: 'Download ok'})
    };

    render() {
        return (
            <div>
                <button className="btn btn-warning" onClick={this.onReportDownload}>Laporan</button>
            </div>
        )
    }
}

export default App;