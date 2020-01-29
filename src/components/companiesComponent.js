import React from 'react';
import Box from '@material-ui/core/Box';

export default class Companies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            companies: [
                <svg xmlns="http://www.w3.org/2000/svg" width="166" height="107" viewBox="0 0 166 107" fill="none">
                    <path d="M135.39 85.1865H122.314C119.618 84.953 117.24 86.9484 117.007 89.623C116.985 89.8141 116.985 89.9839 116.985 90.175V95.1635C116.985 97.8594 119.172 100.046 121.868 100.067C121.91 100.067 121.931 100.067 121.974 100.067H135.05C137.746 100.067 139.932 97.8806 139.932 95.1847V90.1962C139.996 87.5003 137.852 85.2501 135.156 85.2077C135.093 85.2077 135.008 85.2077 134.944 85.2077H135.39V85.1865ZM135.814 95.1847C135.814 95.4182 135.623 95.6092 135.39 95.6092H122.314C122.101 95.7366 121.847 95.6517 121.74 95.4606C121.719 95.4182 121.698 95.3545 121.677 95.2908V90.1962C121.677 89.8778 121.889 89.7716 122.207 89.7716H135.284C135.496 89.7716 135.708 89.7716 135.708 90.1962V95.1847H135.814ZM113.483 89.8565C113.271 89.6443 113.058 89.6443 112.952 89.8565L111.466 92.2977C111.36 92.4888 111.36 92.7435 111.466 92.9346L112.952 95.4819H113.377L114.863 92.9346C114.969 92.7435 114.969 92.4888 114.863 92.2977L113.377 89.8565H113.483ZM161.224 85.1865H142.926V106.138H147.383V100.067H161.203C163.856 100.003 165.979 97.8381 165.979 95.1847V90.1962C166.085 87.479 163.941 85.2501 161.224 85.1865ZM161.542 95.1847C161.542 95.4182 161.372 95.6092 161.139 95.6304C161.096 95.6304 161.054 95.6305 161.012 95.6092H147.192V89.8565H161.012C161.224 89.8565 161.436 89.8565 161.436 90.2811V95.2908L161.542 95.1847ZM150.27 80.6225H162.816C164.493 80.6225 165.894 79.3276 166 77.6507V39.8867H150.27V80.6225ZM62.0059 90.175V95.1635C62.0059 97.8594 64.1923 100.046 66.8882 100.067C66.9307 100.067 66.9519 100.067 66.9944 100.067H83.2759V95.5031H66.9944C66.8458 95.4606 66.7184 95.3333 66.676 95.1847V90.1962C66.676 89.8778 66.676 89.7716 67.1005 89.7716H83.3821V85.2077H66.9944C64.2985 85.2077 62.112 87.3941 62.0908 90.09C62.0908 90.1325 62.0908 90.1537 62.0908 90.1962L62.0059 90.175ZM114.226 80.6225H144.008V72.1102H126.559V64.6594H144.008V55.9348H126.559V48.4839H144.008V39.9716H111.042V77.4172C111.042 79.179 112.464 80.6225 114.226 80.6225Z" fill="#2E3045"/>
                    <path d="M62.112 52.6445V80.6225H77.8417V69.9875H82.6179L90.0688 80.6225H107.412L98.4749 67.4402L104.652 61.2629V39.9928H89.0286L77.8629 45.5332V41.5C77.8629 40.6509 77.1199 39.9079 76.1647 39.9079H71.9192L96.2673 7.25985L125.519 33.3061L140.399 17.0246L159.547 33.3061H165.936L140.378 10.7412L123.354 24.8788L98.2627 2.97187L95.0785 0L42.5402 52.3261L36.4903 39.8867H41.4788L26.0675 10.7412L10.9535 39.8867H15.7509L5.54041 60.4138H11.9299L0 85.0803L56.5716 99.9609L45.4059 74.7637L62.112 52.4322V52.6445ZM77.8417 54.4488L89.0074 48.6962V60.3926H77.8417C77.8417 60.4138 77.8417 54.4488 77.8417 54.4488Z" fill="#2E3045"/>
                    <path d="M104.228 85.1864H90.833C88.1795 85.2925 86.0992 87.5214 86.1629 90.1749V95.1634C86.1629 97.8168 88.2857 100.003 90.9391 100.046H104.228C106.881 99.9821 109.004 97.8168 109.004 95.1634V90.1749C109.068 87.479 106.924 85.2501 104.228 85.1864C104.185 85.1864 104.164 85.1864 104.121 85.1864H104.228ZM104.546 95.1846C104.546 95.4181 104.355 95.6092 104.121 95.6092H90.833C90.642 95.6092 90.4509 95.4818 90.4084 95.2908V90.1961C90.4084 89.8777 90.7269 89.7716 90.9391 89.7716H104.228C104.228 89.7716 104.546 89.7716 104.546 90.1961C104.546 90.1749 104.546 95.1846 104.546 95.1846Z" fill="#2E3045"/>
                </svg>,
                <svg xmlns="http://www.w3.org/2000/svg" width="225" height="106" viewBox="0 0 225 106" fill="none">
                    <path d="M94.3363 44.2364L51.6087 1.50875L51.5742 1.47426C49.6086 -0.491419 46.4014 -0.491419 44.4012 1.47426L44.3668 1.50875L21.158 24.7175V22.4415C21.158 19.6482 18.8819 17.3721 16.0886 17.3721C13.2953 17.3721 11.0192 19.6482 11.0192 22.4415V34.9253L1.67363 44.2709C-0.292048 46.2365 -0.292048 49.4437 1.67363 51.4438L1.70812 51.4783C3.67379 53.444 6.88095 53.444 8.88111 51.4783L48.0222 12.3372L87.1634 51.4783C89.129 53.444 92.3362 53.444 94.3363 51.4783L94.3708 51.4438C96.3365 49.4437 96.3365 46.2365 94.3363 44.2364Z" fill="#2E3045"/>
                    <path d="M31.0198 81.929L46.1245 66.8243C48.1246 64.8241 48.1246 61.617 46.1245 59.6168C44.1243 57.6167 40.9171 57.6167 38.917 59.6168L23.8123 74.7215L8.7076 59.6168C6.70744 57.6167 3.50029 57.6167 1.50012 59.6168C-0.500041 61.617 -0.500041 64.8241 1.50012 66.8243L16.6048 81.929L1.50012 97.0337C-0.500041 99.0338 -0.500041 102.241 1.50012 104.241C3.50029 106.241 6.70744 106.241 8.7076 104.241L23.8123 89.1365L38.917 104.241C40.9171 106.241 44.1243 106.241 46.1245 104.241C48.1246 102.241 48.1246 99.0338 46.1245 97.0337L31.0198 81.929Z" fill="#2E3045"/>
                    <path d="M166.307 63.962C162.444 60.0652 157.582 58.0995 151.719 58.0995C145.891 58.0995 141.098 60.3066 137.339 64.6862C133.58 60.3066 128.786 58.0995 122.958 58.0995C117.13 58.0995 112.268 60.0652 108.371 63.962C104.508 67.8589 102.543 72.5834 102.543 78.1011V100.689C102.543 102.103 103.026 103.276 104.026 104.276C105.026 105.276 106.198 105.759 107.612 105.759C109.026 105.759 110.233 105.276 111.233 104.276C112.233 103.276 112.751 102.103 112.751 100.689V78.1011C112.751 75.3768 113.716 73.0662 115.613 71.135C117.51 69.2383 119.786 68.2727 122.406 68.2727C125.027 68.2727 127.303 69.2038 129.235 71.0316C131.131 72.8593 132.166 75.1354 132.269 77.7907V100.655C132.269 102.069 132.752 103.241 133.752 104.241C134.752 105.241 135.925 105.724 137.27 105.724H137.304H137.339C138.718 105.724 139.891 105.241 140.856 104.241C141.856 103.241 142.339 102.069 142.339 100.655V77.7907C142.477 75.1354 143.477 72.8593 145.374 71.0316C147.271 69.2038 149.547 68.2727 152.202 68.2727C154.823 68.2727 157.099 69.2383 158.996 71.135C160.892 73.0317 161.858 75.3423 161.858 78.1011V100.689C161.858 102.103 162.375 103.276 163.375 104.276C164.375 105.276 165.582 105.759 166.996 105.759C168.376 105.759 169.583 105.276 170.583 104.276C171.583 103.276 172.066 102.103 172.066 100.689V78.1011C172.135 72.5834 170.203 67.8589 166.307 63.962Z" fill="#2E3045"/>
                    <path d="M73.0921 58.134C60.5049 58.134 50.3317 68.859 50.3317 82.067C50.3317 95.275 60.5394 106 73.0921 106C85.6794 106 95.8526 95.275 95.8526 82.067C95.8526 68.859 85.6794 58.134 73.0921 58.134ZM73.0921 95.6198C65.9536 95.6198 60.1945 89.5504 60.1945 82.067C60.1945 74.5837 65.9536 68.5142 73.0921 68.5142C80.2307 68.5142 85.9898 74.5837 85.9898 82.067C85.9898 89.5504 80.2307 95.6198 73.0921 95.6198Z" fill="#2E3045"/>
                    <path d="M217.587 64.3414C213.242 60.1686 207.896 58.0995 201.551 58.0995C195.206 58.0995 189.791 60.4445 185.308 65.1001C180.825 69.7556 178.549 75.3768 178.515 81.929C178.584 88.4813 180.86 94.0679 185.308 98.689C189.791 103.31 195.344 105.69 201.965 105.69C208.827 105.69 215.104 103.034 218.207 99.965C222.449 95.7232 219.104 91.6195 216.069 91.6195C212.655 91.6195 210.621 95.8612 203.241 95.8612C195.206 95.8612 190.136 90.4125 188.688 85.3086H215.966C215.966 85.3086 215.966 85.3086 215.966 85.3431H219.621C221.139 85.3431 222.38 84.9293 223.277 84.0671C224.208 83.205 224.656 82.067 224.656 80.6875V80.2047C224.277 73.7904 221.932 68.4796 217.587 64.3414ZM188.757 77.239C190.55 71.4799 195.93 67.3071 202.31 67.3071C208.655 67.3071 214.035 71.4799 215.862 77.239H188.757Z" fill="#2E3045"/>
                </svg>,
                <svg xmlns="http://www.w3.org/2000/svg" width="264" height="89" viewBox="0 0 264 89" fill="none">
                    <g filter="url(#filter0_d)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M255.094 9.95145C255.094 9.95145 252.458 21.468 249.149 27.642C246.121 21.0839 241.571 9.95145 241.571 9.95145H229.71V3.16036L224.093 4.72543V9.95145H219.676V13.9116H224.093V28.3123C224.093 31.3374 225.878 33.5282 230.082 33.5282C232.501 33.5282 235.638 32.704 238.056 31.09L236.493 27.7786C235.465 28.4072 233.855 29.1826 232.179 29.1826C230.508 29.1826 229.71 28.3123 229.71 26.5056V13.9116H237.836C240.819 20.3819 246.41 32.5343 246.41 32.7126C246.41 32.9629 243.627 39.649 237.007 42.8986L239.638 46.3869C252.907 41.2673 260 9.95145 260 9.95145H255.094ZM210.874 33.0464H216.489V9.95289H210.874V33.0464ZM213.679 6.384C215.676 6.384 217.235 4.92394 217.235 3.21502C217.235 1.40684 215.676 0.0388391 213.679 0.0388391C211.629 0.0388391 210.074 1.46582 210.074 3.21502C210.074 4.96997 211.629 6.384 213.679 6.384ZM195.762 15.7241C195.762 14.113 197.442 13.4153 199.74 13.4153C202.496 13.4153 204.691 14.0511 206.491 14.8811C206.381 12.6472 206.634 10.5858 206.634 10.5858C204.757 9.9083 202.599 9.36311 199.526 9.36311C193.553 9.36311 190.317 12.1941 190.317 15.9629C190.317 23.9709 202.014 22.2102 202.014 26.8436C202.014 28.6086 200.126 29.6314 197.316 29.6314C194.668 29.6314 192.283 28.705 190.64 27.4262C189.762 29.8083 188.746 31.4813 188.746 31.4813C190.798 32.658 193.553 33.5282 197.593 33.5282C202.93 33.5282 207.67 31.5345 207.67 26.4538C207.67 18.6385 195.762 19.8626 195.762 15.7241ZM179.39 16.4074C181.061 14.9761 182.756 14.1374 184.254 14.1159C185.425 14.1116 186.965 14.3806 187.808 15.002C188.614 11.9193 189.962 10.3614 189.962 10.3614C189.126 9.63211 187.165 9.22214 185.989 9.22214C183.72 9.22214 182.042 10.1025 179.173 12.4861L178.467 9.95145H173.783V33.0449H179.39V16.4074ZM159.696 13.3261C163.252 13.3261 165.072 16.2448 165.137 18.9247H154.209C154.209 16.0578 156.362 13.3261 159.696 13.3261ZM160.896 33.5282C163.856 33.5282 167.405 32.704 169.937 31.0454C169.937 31.0454 169.013 29.2962 168.48 27.4276C166.431 28.6604 164.181 29.3423 161.916 29.3423C157.337 29.3423 154.309 26.5041 154.257 22.695H170.647V21.2824C170.647 14.113 166.431 9.36455 159.65 9.36455C152.75 9.36455 148.498 14.7387 148.498 21.3227C148.498 27.6276 152.323 33.5282 160.896 33.5282ZM139.013 33.1916L149.202 9.95289H143.974L137.202 26.5947H137.102L130.738 9.95289H125.207L135.038 33.1916H139.013ZM120.188 6.384C122.189 6.384 123.748 4.92394 123.748 3.21502C123.748 1.40684 122.189 0.0388391 120.188 0.0388391C118.154 0.0388391 116.583 1.46582 116.583 3.21502C116.583 4.96997 118.154 6.384 120.188 6.384ZM117.388 33.0464H123.002V9.95289H117.388V33.0464ZM96.9417 16.6994C98.9209 15.2681 101.355 13.9116 103.881 13.9116C107.345 13.9116 107.874 16.7339 107.874 19.2268V33.0449H113.488V17.6128C113.488 11.6143 109.487 9.36311 105.718 9.36311C102.216 9.36311 99.5208 10.5858 96.6635 12.5407L96.0202 9.95145H91.3271V33.0449H96.9417V16.6994ZM87.6526 0H81.5425V21.3687C81.5425 23.6717 81.0078 25.677 79.5386 27.0436C78.1954 28.3554 76.3423 29.1437 73.2227 29.1437C70.4219 29.1437 68.6818 28.3554 67.3212 27.0436C65.7622 25.5288 65.0652 23.3279 65.0652 21.0853V0H59V21.3227C59 24.6931 59.8157 28.1684 62.4586 30.4657C64.6639 32.4105 68.2659 33.5282 73.1097 33.5282C78.1809 33.5282 81.8873 32.2609 84.2607 30.073C86.5891 27.9138 87.6526 24.834 87.6526 21.4191V0ZM220.446 68.7971C216.294 68.7971 213.763 65.572 213.763 60.7847C213.763 56.0506 216.032 52.7867 220.343 52.7867C224.607 52.7867 227.088 55.9571 227.088 60.7847C227.088 65.4713 224.765 68.7971 220.446 68.7971ZM220.405 48.6712C216.896 48.6712 213.867 49.8493 211.719 51.8891C209.403 54.0468 208.05 57.2216 208.05 60.8839C208.05 64.5967 209.403 67.8592 211.874 70.0284C213.988 71.8769 216.896 72.8522 220.405 72.8522C224.004 72.8522 227.035 71.6726 229.229 69.6832C231.565 67.5298 232.853 64.3493 232.853 60.7286C232.853 57.1712 231.613 54.0468 229.342 51.9524C227.186 49.8493 224.117 48.6712 220.405 48.6712ZM197.484 48.6712C194.036 48.6712 191.399 50.055 188.865 51.856V39.2549H183.262V72.3602H188.865V56.1039C190.709 54.6898 193.081 53.2168 195.601 53.2168C199.155 53.2168 199.697 55.8967 199.697 58.6011V72.3602H205.31V57.1712C205.31 50.5384 201.26 48.6712 197.484 48.6712ZM173.419 66.9026C172.499 67.6779 170.827 68.7482 168.191 68.7482C165.269 68.7482 163.771 67.2334 163.771 65.1893C163.771 63.0402 165.441 61.8161 169.262 61.714L173.419 61.573V66.9026ZM179.131 56.8821C179.131 50.8807 175.3 48.6712 169.491 48.6712C166.14 48.6712 163.12 49.2696 159.833 51.3195L161.716 54.5934C163.268 53.6599 165.441 52.7349 168.345 52.7349C171.21 52.7349 173.46 53.8987 173.46 57.1353V57.7984L168.73 57.9523C162.089 58.2012 158.171 60.8379 158.171 65.572C158.171 70.0744 161.823 72.8522 166.301 72.8522C169.859 72.8522 172.217 71.5777 173.839 70.2053L174.912 72.3602H179.606C179.234 71.4381 179.131 69.7206 179.131 65.3361V56.8821ZM149.926 68.1627C149.179 68.4101 147.953 68.6014 146.808 68.6014C141.253 68.6014 138.191 65.2814 138.191 60.7286C138.191 55.8593 141.84 52.8745 146.598 52.8745C148.208 52.8745 149.015 53.0269 149.926 53.2557V68.1627ZM149.926 48.9675C148.967 48.828 147.883 48.6712 146.385 48.6712C138.459 48.6712 132.585 53.8483 132.585 61.035C132.585 68.8949 138.725 72.8522 146.223 72.8522C150.257 72.8522 153.427 72.0696 155.539 71.0339V39.2534H149.926V48.9675ZM123.612 72.3588H129.583V39.3067H123.612V72.3588ZM106.754 55.2106L106.399 56.918H103.866L102.956 59.9907H106.026C104.728 67.9958 104.482 73.0089 99.4585 77.5272L101.891 80C108.077 74.948 108.858 67.4406 110.02 59.9907H113.374L114.562 56.918H110.563L110.838 55.5155C111.28 53.3319 112.51 52.4185 113.983 52.4185C114.804 52.4185 115.584 52.6069 116.441 53.1348L118.006 50.265C116.546 49.4408 115.243 49.1862 113.838 49.1862C111.39 49.1862 107.696 50.3772 106.754 55.2106ZM96.2491 68.5554C95.5073 69.2861 94.5147 69.6918 93.486 69.6918C92.4602 69.6918 91.7169 69.3451 91.1634 68.8287C90.5258 68.1641 90.2085 67.1701 90.2085 65.9877C90.2085 63.9494 90.82 62.203 91.8545 61.0479C92.6731 60.1906 93.7323 59.6986 94.8625 59.6986C95.8709 59.6986 96.6635 60.0194 97.2069 60.5574C97.8502 61.2105 98.1269 62.203 98.1269 63.3855C98.1269 65.559 97.4169 67.4406 96.2491 68.5554ZM102.125 63.3236C102.125 61.5068 101.61 59.7288 100.381 58.4486C99.2977 57.2892 97.5778 56.5671 95.2233 56.5671C92.6731 56.5671 90.4853 57.5251 88.8871 59.1348C87.1759 60.8379 86.1515 63.2891 86.1515 65.9877C86.1515 67.8606 86.7007 69.7134 87.9888 71.0325C89.1233 72.1185 90.762 72.845 93.0803 72.845C95.3971 72.845 97.4749 71.9891 99.0513 70.5865C100.987 68.8949 102.125 66.2754 102.125 63.3236Z" fill="#E2F1F1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 0V22.092H11.363V58.91H4V81.001H45.727V58.91H38.363V22.092H45.727V0H4ZM6.454 2.454H43.273V19.636H35.91V61.365H43.273V78.548H6.454V61.365H13.818V19.636H6.454V2.454Z" fill="#E2F1F1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2719 63.82H8.90991V76.092H40.8179V63.82H33.4549V17.182H40.8179V4.90802H8.90991V17.182H16.2719V63.82Z" fill="#E2F1F1"/>
                    </g>
                    <defs>
                    <filter id="filter0_d" x="0" y="0" width="264" height="89.001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            ]
        }
    }
    render() {
        return(
            <>
                {this.state.companies.map(company => (
                    <Box display="inline" component="div" mx={3} className={this.props.classes.companyFill}>
                        {company}
                    </Box>
                ))}
            </>
        )
    }
}
        