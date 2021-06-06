import React from 'react';
import {useSelector } from 'react-redux';
import '../SCSS/Templates.scss';

const Records = () => {
    const currentTemplates = useSelector(state => state.SinglePageTemp);
    const category = useSelector(state=>state.Category);
    console.log(currentTemplates);
    // const template = useSelector(state => state.singlePageTemplate);
    return (
        <div className="templates">
  
            <div className="tada">
                Tada! Get started with a free template. Can't find what you are looking for? Search from 1000+ available templates.
            </div>

            <div className="templateHeader">
            <span className="templateName">{category} Template</span>
            <span className="totalTemplateFound">{currentTemplates.length} Templates found</span>
            </div>

            <div className="templateFlex">
            { currentTemplates.map( (template, index) => 
                    <div key={index} className="temp">
                        <div className="name">{template.name}</div>
                        <div className="templateDescription">{template.description}</div>
                        <div className="link">
                            <a href={template.link}>Use Template</a>
                        </div>
                    </div>
                )
            }
            </div>
            
        </div>
    )
}

export default Records;