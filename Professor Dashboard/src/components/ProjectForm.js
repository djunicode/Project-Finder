import React, { Component } from 'react';

class ProjectForm extends Component {
    render() {
        return (
            <div className="pform">
                <form>
                    <div className="pformlab">
                        <label htmlFor="pname">Project name:</label>
                        <br />
                        <br />
                        <br />
                        <label htmlFor="ptlead">Team leader:</label>
                        <br />
                        <br />
                        <br />
                        <label htmlFor="pnom">Number of members:</label>
                        <br />
                        <br />
                        <br />
                        <label htmlFor="ptdesc">Team description:</label>
                        <br />
                        <br />
                        <br />
                        <label htmlFor="requestpform">Send Request To:</label>                        
                        <br />
                        <br />
                        <br />
                        <label htmlFor="pskills">Skills you're looking for:</label>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="pforminp">
                        <input type="text" id="pname" ></input>
                        <br />
                        <br />
                        <input type="text" id="ptlead" ></input>
                        <br />
                        <br />
                        <input type="text" id="pnom"></input>
                        <br />
                        <br />
                        <input type="text" id="ptdesc" > 
                        </input>
                        <br />
                        <br />
                        <select id="requestpform">
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <br />
                        <br />
                        <select id="pskills">
                            <option>ReactJS</option>
                            <option>Django</option>
                            <option>Machine Learning</option>
                            <option>Java</option>                            
                        </select>
                        <br />
                        <br />
                    </div>
                
                    <button type="submit">Create Team</button>
                </form>
            </div>
        );
    }
}

export default ProjectForm;