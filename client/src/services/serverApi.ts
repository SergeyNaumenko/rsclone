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
    public addWatchList = async (item:any,jwt:string = '') => {
        try {
            const url: string = `${this.baseUrl}/api/watchlistadd`;
            const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    },
                    body: JSON.stringify({item})
                });
            const json = await response.json();
            return json;
       } catch (error) {
            M.toast({html: error})
       }
    }
    public addVote = async (item:any,jwt:string = '') => {
        try {
            const url: string = `${this.baseUrl}/api/voteadd`;
            const response = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    },
                    body: JSON.stringify({item})
                });
            const json = await response.json();
            return json;
       } catch (error) {
            M.toast({html: error})
       }
    }
    public getWatchList = async (jwt:string = '') => {
        try {
            const url: string = `${this.baseUrl}/api/watchlist`;
            const response = await fetch(url,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    }
                });
            const json = await response.json();
            return json;
       } catch (error) {
            M.toast({html: error})
       }
    }
    public getRatingList = async (jwt:string = '') => {
        try {
            const url: string = `${this.baseUrl}/api/ratinglist`;
            const response = await fetch(url,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    }
                });
            const json = await response.json();
            return json;
       } catch (error) {
            M.toast({html: error})
       }
    }
    public getVoteByFilm = async (jwt:string = '',filmId:any) => {
        try {
            const url: string = `${this.baseUrl}/api/getvote:${filmId}`;
            console.log(url);
            const response = await fetch(url,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${jwt}`
                    }
                });
            const json = await response.json();
            return json;
       } catch (error) {
       }
    }
}

export default ServerApi;