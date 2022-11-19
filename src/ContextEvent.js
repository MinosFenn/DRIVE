import React, { Component } from 'react';
import Client from './Contentful';

  const EventContext = React.createContext();
  
  class EventProvider extends Component {
    state = {
      events: [],
      sortedEvents: [],
      loading: true,
    };
    getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: 'events',
          order: '-sys.updatedAt',
        });
  
        //  set price to croissant otherwise cars is by updated AT and sells stay n price order
        let events = this.formatData(response.items);
  
        this.setState({
          events,
          loading: false,
        });
        //nothing to add
      } catch (error) {
        console.log(error);
      }
    };
    // store and pass data
    componentDidMount() {
      this.getData();
    //   console.log(this.getData());
    }
    formatData(items) {
        console.log(items)
      let tempItems = items.map((item) => {
        let id = item.sys.id;
        let image = item.fields.image.fields.file.url;
        let event = { ...item.fields, image, id };
        return event;
      });
      return tempItems;
    }
  
    // create slug according to event
    getEvent = (slug) => {
      let tempEvents = [...this.state.events];
      const event = tempEvents.find((event) => event.slug === slug);
      return event;
    };
  
    // handleChange = (event) => {
    // const type = event.target.type;
    // const name = event.target.name;
    // const value = event.target.value
  
    // console.log(type, name, value);
    // }
    //   calculate the change in value to reorganise page according to search
    filterEvents = () => {
      let { events } = this.state;
  
      let tempEvents = events;
  
      this.setState({
        sortedEvents: tempEvents,
      });
    };
    render() {
      return (
        <EventContext.Provider
          value={{
            ...this.state,
            getEvent: this.getEvent,
            getEvent: this.getEvent,
  
            handleChange: this.handleChange,
          }}
        >
          {' '}
          {this.props.children}
        </EventContext.Provider>
      );
    }
  }

  const EventConsumer = EventContext.Consumer;


  export function withEventConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <EventConsumer>
          {(value) => <Component {...props} context={value} />}
        </EventConsumer>
      );
    };
  }


  export {
    EventProvider,
    EventConsumer,
    EventContext,
  };
  