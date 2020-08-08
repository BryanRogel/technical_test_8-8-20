import React from 'react';
import { Table as AntdTable } from 'antd';

const itemRender = (current, type, originalElement, page) => {
    const styles = {
        border: '2px solid black !important',
        borderRadius: '3px',
        color: '#000',
    }
    if (type === 'prev') {
        return <a style={{ paddingRight: '5px', color: '#2D4D7E', fontFamily: 'Montserrat'}}>anterior</a>;
        }
        if (type === 'next') {
        return <a style={{ paddingLeft: '5px', color: '#2D4D7E', fontFamily: 'Montserrat'}}>siguiente</a>;
        }
        if (type === 'page') {
            return <a style={styles}>{current}</a>;
        }
        return originalElement;
    }

const Table = ({columns, data, scroll, size, pagination}) => {
    return (
        <AntdTable
        scroll={scroll}
        columns={columns}
        dataSource={data}
        pagination={{itemRender, defaultPageSize: 6}}
        size={size}
        pagination={pagination}
        rowKey={record =>  (
            record.id
            || record.key
            || record._idCategory
            )}  // si se accede de diferente manera al id agregarlo acá
        />
    )
}

export default Table;