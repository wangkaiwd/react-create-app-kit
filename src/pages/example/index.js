import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import 'react-photoswipe/lib/photoswipe.css'
import { PhotoSwipeGallery } from 'react-photoswipe'
import { Button } from 'antd'
@withRouter
export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      items: [
        {
          src: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
          thumbnail: 'https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 1'
        },
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
          thumbnail: 'https://farm6.staticflickr.com/5591/15008867125_b61960af01_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 2'
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          thumbnail: 'https://farm4.staticflickr.com/3902/14985871946_24f47d4b53_h.jpg',
          w: 1200,
          h: 900,
          title: 'Image 3'
        }
      ],
      options: {
        closeOnScroll: false,
        shareEl: false
      }
    }
  }

  getThumbnailContent = item => (
    <img src={item.thumbnail} width={120} height={90} alt="" />
  )

  openPhotoSwipe = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }
  handleBeforeChange = (instance, change) => {
    console.log('Before change: ', change)
  }

  render() {
    const { isOpen, items, options, items1 } = this.state
    return (
      <div className="page-wrapper">
        <div className="page-header">
          <h1>Photoswipe</h1>
        </div>
        <div className="page-content">
          <PhotoSwipeGallery
            items={items}
            options={options}
            thumbnailContent={this.getThumbnailContent}
            isOpen={isOpen}
            onClose={this.handleClose}
          />
          <button type="button" className="btn btn-primary" onClick={this.openPhotoSwipe}>
            Open
          </button>
        </div>
        <div className="page-footer">
          <Button type="primary" onClick={() => this.props.history.push('/home/salesOrder/transactionOrder/agentEnd')}>跳转</Button>
        </div>
      </div>
    )
  }
}
