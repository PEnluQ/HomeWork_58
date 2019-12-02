import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Button from "../../components/UI/Button/Button";
import Alert from "../../components/UI/Alert/Alert";
import './SiteBuild.css';

class SiteBuild extends Component {
    state = {
      purchasingModal: false
    };

    purchaseHandlerModal = () => {
        this.setState({purchasingModal: true});
    };

    purchaseCancelModal = () => {
      this.setState({purchasingModal: false});
    };

    dismissAlert = () => {
      alert('Bla bla bla');
    };

    render() {
        return (
            <div className='site'>
                <Button
                    onClick={this.purchaseHandlerModal}
                >
                    Open modal
                </Button>

                <Modal
                    show={this.state.purchasingModal}
                    close={this.purchaseCancelModal}
                    title='Some kinda modal title'
                    X={this.purchaseCancelModal}
                >
                    <p>This is modal content</p>
                </Modal>

                <Alert
                    type='danger'
                    dismiss={this.dismissAlert}
                >
                    This is a danger type alert
                </Alert>
                <Alert
                    type='primary'
                    dismiss={this.dismissAlert}
                >
                    This is a primary type alert
                </Alert>
                <Alert
                    type='success'
                    clickDismissable
                    dismiss={this.dismissAlert}
                >
                    This is a success type alert
                </Alert>
            </div>
        )
    }
}

export default SiteBuild;