import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: string;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: string): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    console.log(data);
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
