import React from "react";
import { FontIcon } from "@fluentui/react";

import "./statusBar.scss";
import { IProject } from "../../../models/applicationState";
import { getAPIVersion } from "../../../common/utils";
export interface IStatusBarProps {
    project: IProject;
}
export class StatusBar extends React.Component<IStatusBarProps> {
    // export class StatusBar extends React.Component<IStatusBarProps> {
    public render() {
        const apiVersion = getAPIVersion(this.props.project?.apiVersion);
        return (
            <div className="status-bar">
                <div className="status-bar-main">{this.props.children}</div>
                <div className="status-bar-version">
                    <ul>
                        {this.props.project && (
                            <li>
                                <a
                                    href="https://github.com/microsoft/OCR-Form-Tools/blob/master/CHANGELOG.md"
                                    target="blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontIcon iconName="AzureAPIManagement" />
                                    <span>{apiVersion}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
