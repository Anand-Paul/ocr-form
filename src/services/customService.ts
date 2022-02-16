import Axios from "axios";
import { constants } from "../common/constants";

interface ILabelElement {
    key: string;
    type: string;
    defaultValue: string;
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
        labelelements: ILabelElement[];
    };
}

export interface ICustomService {
    getCustomData(params: string): Promise<ICustomDetails>;
}

export default class CustomService implements ICustomService {
    public getCustomData(params: string) {
        return new Promise<ICustomDetails>(async (resolve, reject) => {
            // FxORcRAoQksYzrqgrFx2dN%2F7BHTWOsiPzVl1RLl7uec%3D
            Axios.get(`${constants.customDataAPI}?qr=${params}`)
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
