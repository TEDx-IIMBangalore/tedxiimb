import React from 'react';
import Library from './blogItems/blogLibrary';
import ItemLoader from './blogItems/blogItemLoader';


class Blog extends React.Component{   
    
    render(){
        const { match } = this.props;    
        return (
        <div>
            <section className="breadcrumb-area bg-img bg-gradient-overlay jarallax"
                style={{'backgroundImage': "url('img/bg-img/37.jpg')"}}>
                <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                    <div className="breadcrumb-content">
                        <h2 className="page-title">The TedXIIMB Blog</h2>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {match.params.slug ?<ItemLoader slug={match.params.slug}/>:<Library/>}

        </div>
        )
    };
}
export default Blog;