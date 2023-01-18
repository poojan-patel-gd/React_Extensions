import React, { PropTypes, Component } from 'react';
import style from './createPearl.css'
export default class CreatePearl extends Component {

    static propTypes = {
    };

    constructor(props, context) {
        super(props, context);

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.formMain}>
                <h2>Create pearl</h2>
                <form>
                    <div className={style.form}>
                        <div>
                            <label>Category</label>
                            <input type="text" className={style["form-control"]} />
                        </div>
                        <div>
                            <label>URL</label>
                            <input type="text" className={style["form-control"]} />
                        </div>
                        <div>
                            <label>Title</label>
                            <input type="text" className={style["form-control"]} />
                        </div>
                        <div>
                            <label>Type</label>
                            <div className={style.typeBtnMain}>
                                <button className={style.typeBtn}>Video</button>
                                <button className={style.typeBtn}>Article</button>
                                <button className={style.typeBtn}>Audio</button>
                                <button className={style.typeBtn}>Image</button>
                                <button className={style.typeBtn}>Link</button>
                                <button className={style.typeBtn}>Others</button>
                            </div>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea rows={2} className={style["form-control"]} />
                        </div>
                        <button className={style.addBtn}> Add</button>
                     </div>
                </form>
            </div>
        );
    }
}
