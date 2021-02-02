class ServerApi {
    private baseUrl: string = 'http://localhost:5000';
    private getResource = async (path: string,login: string,password: string) => {
       try {
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
       } catch (error) {
            M.toast({html: error})
       }
      }
    
    public registerAndLogin = async (path: string,login: string,password: string) => {
        try {
            const data = await this.getResource(path,login,password);
            return data;
        } catch (error) {
            M.toast({html: error})
        }
    }
    public addWatchList = async (path: string,jwt:string = '') => {
        try {
            const url: string = `${this.baseUrl}${path}`;
            const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    },
                    body: JSON.stringify({})
                });
            const json = await response.json();
            return json;
       } catch (error) {
            M.toast({html: error})
       }
    }
}

export default ServerApi;