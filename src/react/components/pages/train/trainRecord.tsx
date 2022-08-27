import React from "react";
import { FontIcon, PrimaryButton } from "@fluentui/react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

import { getPrimaryGreenTheme } from "../../../../common/themes";
import IProjectActions, * as projectActions from "../../../../redux/actions/projectActions";
import { IApplicationState } from "../../../../models/applicationState";

export interface ITrainRecordProps {
    accuracies?: object;
    averageAccuracy?: number;
    actions?: IProjectActions;
    modelInfo: {
        isComposed?: boolean;
        modelId: string;
        createdDateTime: string;
        modelName: string;
    };
}

export interface ITrainRecordState {}

function mapStateToProps(state: IApplicationState) {
    return {
        project: state.currentProject,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(projectActions, dispatch),
    };
}
@connect(mapStateToProps, mapDispatchToProps)
export default class TrainRecord extends React.Component<
    ITrainRecordProps,
    ITrainRecordState
> {
    public render() {
        return (
            <aside className="mt-3">
                <h5>Model information</h5>
                <div>
                    <h6>Model ID:</h6>
                    <p>{this.props.modelInfo.modelId}</p>
                    <PrimaryButton
                        theme={getPrimaryGreenTheme()}
                        className="mb-4"
                        onClick={async () => {
                            const qr = localStorage.getItem("qr");
                            const params = {
                                qr: qr,
                                formrecognizerModelID:
                                    this.props.modelInfo.modelId,
                            };
                            const ModelPosted =
                                await this.props.actions.postModelID(params);
                            if (ModelPosted.statusCode === 200) {
                                toast.success(`Successfully saved the model.`, {
                                    autoClose: 8000,
                                });
                            } else {
                                toast.error(ModelPosted.errorMessage);
                            }
                        }}
                    >
                        Save Model ID
                    </PrimaryButton>
                    {this.props.modelInfo.modelName && (
                        <>
                            <h6>Model Name:</h6>
                            <p>{this.props.modelInfo.modelName}</p>
                        </>
                    )}
                    <h6>Created date and time:</h6>
                    <p>
                        {new Date(
                            this.props.modelInfo.createdDateTime
                        ).toLocaleString()}
                    </p>
                    <h6>Average accuracy:</h6>
                    <p>{(this.props.averageAccuracy * 100).toFixed(2) + "%"}</p>
                    <div className="accuracy-info">
                        <a
                            href="https://aka.ms/form-recognizer/docs/train"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontIcon iconName="Info" />
                            <span>
                                Learn more about improving model accuracy.
                            </span>
                        </a>
                    </div>
                </div>
            </aside>
        );
    }
}
