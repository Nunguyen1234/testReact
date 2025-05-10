import PropTypes from 'prop-types';

function MyComponent({ customArrayProp }) {
    return (
        <div>
            {customArrayProp.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

MyComponent.propTypes = {
    customArrayProp: PropTypes.arrayOf(function (
        propValue,
        key,
        componentName,
        location, // giúp bt vị trí của prop khi đag kt mã nguồn
        propFullName
    ) {
        if (!/matchme/.test(propValue[key])) {
            return new Error(
                `Invalid prop \`${propFullName}\` supplied to \`${componentName}\`. Validation failed.` // thông báo về prop 
            );
        }
    }),
};
// PropTypes  kiểm tra dữ liệu tránh lỗi
// defaultProps  xư ly trường hợp  thiếu prop
// Function Component + PropTypes = Code sạch
// .map là 1  phương thức 
export default MyComponent;
