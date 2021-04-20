import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';
import fun from '../../../images/fun.png';
import safe from '../../../images/safe.png';
import caring from '../../../images/caring.png';
import Teachers from '../../../images/teachers.png';


const Blogs = () => {

    const blogData = [
        {
            title : 'Social and Fun',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : fun,
            date : '23 April 2019'
        },
        {
            title : 'Caring Stuff',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Sinthia',
            authorImg : safe,
            date : '23 April 2019'
        },
        {
            title : 'Safe Environment',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : caring,
            date : '23 April 2019'
        },
        {
            title : 'Qualified Teachers',
            description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author:'Dr. Cudi',
            authorImg : Teachers,
            date : '23 April 2019'
        }
    ]

    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;