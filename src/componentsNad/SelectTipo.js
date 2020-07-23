export default class SelectTipo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
        };
        this.handleChange = this.handleChange.bind(this);

        this.options = [];

        axios.get('http://localhost:4000/tipos').then(resp => {
            Object.entries(resp.data).forEach(entry => {
              const [key, value] = entry;
              this.options.push({ value: (key, value._id), label: (key, value.descricao )});
            });
         });
     
    }

    componentDidMount() {
        this.setState({
            selectedValue: this.props.defaultValue,
        })
    }

    handleChange(selectedOption) {
        this.setState({selectedValue: selectedOption.target.value});
    }

    render() {
        return (
            <Select
                value={this.options.filter(({value}) => value === this.state.selectedValue)}
                onChange={this.handleChange}
                options={this.options}
            />
        )
    }
}

SelectTipo.propTypes = {
    defaultValue: PropTypes.string.isRequired
};