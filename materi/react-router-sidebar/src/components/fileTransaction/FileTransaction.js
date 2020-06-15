import React from 'react';
import {
    downloadFileService, downloadReportService, listFileService, upload,
    uploadService
} from "../../api/fileTransaction";
import MainContent from "../mainContent/MainContent";

class FileTransaction extends React.Component {
    state = {selectedFile: null, uploaded: false, loading: false, listFile: [{}]};

    componentDidMount() {
        this.onGetListFile();
    }

    doTutup = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/protected/main'
        })
    };

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        })
    };

    onClickHandler = async (event) => {
        if (this.state.selectedFile) {
            const data = new FormData();
            data.append('documentFile', this.state.selectedFile);
            const response = await uploadService(data);
            const d = await response.json();
            this.onGetListFile();
        }
    };

    onGetListFile = async () => {
        this.setState({loading: true});
        try {
            const response = await listFileService();
            const data = await response.json();
            this.setState({listFile: data});
        } catch (err) {
            this.setState({alert: true, notificationMessage: 'Session timeout'});
            setTimeout(() => {
                this.props.history.replace({pathname: '/'});
            }, 1500)
        }
        this.setState({loading: false});
    };
    // onReportDownload = async (nama) => {
    //     const response = await downloadReportService();
    //     const blob = await response.blob();
    //     const link = document.createElement('a');
    //     link.href = window.URL.createObjectURL(new Blob([blob]));
    //     link.setAttribute('download', 'report');
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    //     this.setState({message: 'Download ok'})
    // };
    onDownload = async (nama) => {
        const response = await downloadFileService(nama);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(new Blob([blob]));
        link.setAttribute('download', nama);
        document.body.appendChild(link);
        link.click();
        link.remove();
        this.setState({message: 'Download ok'})
    };
    onRenderListFile = () => {
        return this.state.listFile.map((file, index) => {
            return (
                <tr key={index}>
                    <td>{file.namaFile}</td>
                    <td>
                        <button type='button' className='btn btn-primary'
                                onClick={() => this.onDownload(file.namaFile)}>Download
                        </button>
                    </td>
                </tr>
            )
        })
    };

    render() {
        return (
            <MainContent {...this.props}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div className='d-flex flex-row align-items-center'>
                                <div className='flex-grow-1'><i className="fas fa-cloud-upload-alt"></i> Upload</div>
                                <div>
                                    <button className="btn btn-link" onClick={this.doTutup}><i
                                        className="fas fa-2x fa-times-circle"></i></button>
                                </div>
                            </div>
                        </h5>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Upload</button>
                        {/*<button className="btn btn-warning" onClick={this.onReportDownload}>Laporan</button>*/}
                    </div>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                        <tr>
                            <td>Nama File</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.onRenderListFile()}
                        </tbody>
                    </table>
                </div>
            </MainContent>
        )
    }
}

export default FileTransaction;