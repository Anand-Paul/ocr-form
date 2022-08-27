import Axios from "axios";
import { constants } from "../common/constants";
import { FieldFormat, FieldType } from "../models/applicationState";

interface ILabelElement {
    key: string;
    type: string;
    defaultValue: string;
}

export interface ITag {
    name: string;
    color: string;
    type: FieldType;
    format: FieldFormat;
    documentCount?: number;
}
interface ICustomDetails {
    statusCode: number;
    error: boolean;
    success: boolean;
    errorMessage: string;
    data: {
        projectID: string;
        projectName: string;
        connection: string;
        apikey: string;
        apiendpoint: string;
        labelelements: ITag[];
    };
}

interface PostModelIDParams {
    qr: string;
    formrecognizerModelID: string;
}

interface PostModelIDDetails {
    statusCode: number;
    error: boolean;
    success: boolean;
    errorMessage: string;
    data: boolean;
}

export interface ICustomService {
    getCustomData(params: string): Promise<ICustomDetails>;
    postModelID(params: PostModelIDParams): Promise<PostModelIDDetails>;
}

export default class CustomService implements ICustomService {
    public getCustomData(params: string) {
        return new Promise<ICustomDetails>(async (resolve, reject) => {
            // Project ID: Ml9sYXlvdXRfNQ==
            // QR : FxORcRAoQksYzrqgrFx2dN%2F7BHTWOsiPzVl1RLl7uec%3D
            localStorage.setItem("qr", params);
            Axios.get(
                `${constants.customService}/api/LayoutDetails/getlayout?qr=${params}`
            )
                .then((response) => {
                    if (response.status === 200) {
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public postModelID(params: PostModelIDParams) {
        return new Promise<PostModelIDDetails>(async (resolve, reject) => {
            // {
            //     "qr": "uUMOh1rs2xpGfeKan0tko96Ab7ROCJiVskrPZKyYakc=",
            //     "formrecognizerModelID": "42b96fbf-113d-4f95-a166-6b43d0118bd"
            //   }
            Axios.post(
                `${constants.customService}/api/LayoutDetails/FormrecognizerModelIDUpdate`,
                {
                    qr: params.qr,
                    formrecognizerModelID: params.formrecognizerModelID,
                }
            )
                .then((response) => {
                    if (response.status === 200) {
                        resolve(response.data);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
