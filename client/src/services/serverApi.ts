export default class ServerApi {
    private baseUrl: string = 'http://localhost:5000';
    private getResource = async (path: string,login: string,password: string) => {
        const url: string = `${this.baseUrl}${path}`;
        const response = await fetch(url,{
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({login: login,password: password})
              });
    
        const json = await response.json();
        return json;
      }
    
    public registerAndLogin = async (path: string,login: string,password: string) => {
        const data = await this.getResource(path,login,password);
        return data;
    }
}