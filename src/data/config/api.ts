import axios, { AxiosInstance, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const CONST_TIME_MIN = 10;

export async function getPage({ _, queryKey }: any): Promise<any> {
  const [key, id, section] = queryKey;
  try {
    const resp: AxiosResponse<any> = await api.get(`/wp/V2/pages/${id}?_fields=acf.${section}`);
    return resp.data.acf[section];
  } catch (error) {
    console.log(error);
  }
}

export async function getService({ _, queryKey }: any): Promise<any> {
  const [key, search, section] = queryKey;
  let url = `/wp/V2/servico/${search}?_fields=acf.${section}`;
  if (!section) url = `/wp/V2/servico/${search}`;
  if (isNaN(search)) url = `/wp/V2/servico?slug=${search}&_fields=acf.${section}`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (isNaN(search)) return resp.data[0].acf[section];
    if (!section) return resp.data;
    return resp.data.acf[section];
  } catch (error) {
    console.log(error);
  }
}

export async function getCase({ _, queryKey }: any): Promise<any> {
  const [key, search, section] = queryKey;
  let url = `/wp/V2/case/${search}?_fields=acf.${section}`;
  if (!section) url = `/wp/V2/case/${search}`;
  if (isNaN(search)) url = `/wp/V2/case?slug=${search}&_fields=acf.${section}`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (isNaN(search)) return resp.data[0].acf[section];
    if (!section) return resp.data;
    return resp.data.acf[section];
  } catch (error) {
    console.log(error);
  }
}

export async function getHeader(): Promise<any> {
  try {
    const resp: AxiosResponse<any> = await api.get(`/acf/V3/options/option`);
    return resp.data.acf.header;
  } catch (error) {
    console.log(error);
  }
}

export async function getFooter(): Promise<any> {
  try {
    const resp: AxiosResponse<any> = await api.get(`/acf/V3/options/option`);
    return resp.data.acf.footer;
  } catch (error) {
    console.log(error);
  }
}

export async function getPosts({ _, queryKey }: any): Promise<any> {
  const [key, params] = queryKey;
  try {
    const resp: AxiosResponse<any> = await api.get(`/wp/V2/posts?status=publish&${params || ""}_embed`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPost({ _, queryKey }: any): Promise<any> {
  const [key, search, params] = queryKey;
  let url = `/wp/V2/posts/${search}?status=publish&${params || ""}_embed`;
  if (isNaN(search)) url = `/wp/V2/posts?slug=${search}&status=publish&${params || ""}_embed`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (isNaN(search)) return resp.data[0];
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories(): Promise<any> {
  try {
    const resp: AxiosResponse<any> = await api.get(`/wp/V2/categories?exclude=1`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function sendForm(body: FormData, id: number): Promise<any> {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    const resp: AxiosResponse<any> = await api.post(`/contact-form-7/v1/contact-forms/${id}/feedback`, body, {
      headers,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts({ _, queryKey }: any): Promise<any> {
  const [key, params] = queryKey;
  try {
    const resp: AxiosResponse<any> = await api.get(`/wp/V2/produto?status=publish&${params || ""}_embed`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct({ _, queryKey }: any): Promise<any> {
  const [key, search, section] = queryKey;
  let url = `/wp/V2/produto/${search}?_fields=acf.${section}`;
  if (!section) url = `/wp/V2/produto/${search}`;
  if (isNaN(search)) url = `/wp/V2/produto?slug=${search}&_fields=acf.${section}`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (isNaN(search)) return resp.data[0].acf[section];
    if (!section) return resp.data;
    return resp.data.acf[section];
  } catch (error) {
    console.log(error);
  }
}

export async function getMeta(value: any, type?: string): Promise<any> {
  let url = `/acf/V3/pages/${value}/header_seo/`;
  if (type) url = `/wp/V2/${type}?slug=${value}`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (type) return resp.data[0];
    return resp.data.header_seo;
  } catch (error) {
    console.log(error);
  }
}

export async function getStrData({ _, queryKey }: any): Promise<any> {
  const [key, id] = queryKey;
  try {
    const resp: AxiosResponse<any> = await api.get(`/acf/V3/pages/${id}/dados_estruturados/`);
    return resp.data.dados_estruturados;
  } catch (error) {
    console.log(error);
  }
}

export async function getColors(): Promise<any> {
  try {
    const resp: AxiosResponse<any> = await api.get(`/acf/V3/options/option`);
    return resp.data.acf.theme;
  } catch (error) {
    console.log(error);
  }
}

export async function getInstagram() {
  try {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    if (!token) return console.log("getInstagram without token");
    const fields = "media_url,media_type,permalink";
    const { data } = await axios.get(`https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`);
    return data.data;
  } catch (error) {
    console.log("getInstagramFeed error", error);
  }
}

export async function getPostType({ _, queryKey }: any): Promise<any> {
  const [key, search, section, type] = queryKey;
  let url = `/wp/V2/${type}/${search}?_fields=acf.${section}`;
  if (!section) url = `/wp/V2/${type}/${search}?_embed`;
  if (isNaN(search)) url = `/wp/V2/${type}?slug=${search}&_fields=acf.${section}`;
  if (isNaN(search) && !section) url = `/wp/V2/${type}/?slug=${search}&_embed`;
  try {
    const resp: AxiosResponse<any> = await api.get(url);
    if (isNaN(search) && !section) return resp.data[0];
    if (isNaN(search)) return resp.data[0].acf[section];
    if (!section) return resp.data;
    return resp.data.acf[section];
  } catch (error) {
    console.log(error);
  }
}
