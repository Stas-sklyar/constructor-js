import image from './assets/image.png'

const text = 'Какой-то текст в абзаце, полностью стилизирован и тд.'
export const model = [
    {
        type: 'title', value: 'Конструктор сайтов на чистом JS', options: {
            tag: 'h2',
            styles: {
                color: '#555',
                'background-color': 'red',
                'text-align': 'center',
                padding: '10px'
            }
        }
    },
    {
        type: 'text', value: text, options: {
            styles: {
                display: 'flex',
                'justify-content': 'center',
                'font-size': '25px',
                padding: '15px',
            }
        }
    },
    {
        type: 'columns', value: [
            'Колонка 1',
            'Колонка 2',
            'Колонка 3',
            'Колонка 4'
        ], options: {
            styles: {
                padding: '15px',
                'font-size': '25px'
            }
        }
    },
    {
        type: 'image', value: image, options: {
            styles: {
                margin: '50px 15px'
            }
        }
    }
]