var WebTracker = function() {
    $(function() {
        // ************************************************************
        // INITIALIZATION
        var $box = $('.outputBox'),
            $userField = $('.userInput'),
            // ****************************************
            // GET KEYBOARD CHAR-CODE
            stack = flow = warp = flowInit = '',
            ready = pointer = response = status,
            tagArray = [],
            regEx, context,
            ti = 0, tp = 0, // LOOP-COUNTERS
            // ****************************************
            // SETUP DEFAULT ENVIRONMENT VARS
            req, cb, res, rem, fix, mem, sts, setContext, getStatus, // LOGIC-PROCESS
            input = '', complete, singleRet, singleTab, singleDel, singleSpc, dataset, dateset, urlset, define, // QUERY-PROCESS
            typefix, typeArray, verbId, verbArray, objId, objArray, feature, featureArray, featfix, // DEFINE-PROCESS
            tagdef, tagset, vector, firstRun, hexArray, hexId, hexVar, appStr, defStr, preStr, // SHORTCUT-PROCESS
            scSet, stackInit, statusSet, app, // BUILD-PROCESS
            $debug = false; // DEBUG-MODE
        // ************************************************************
        // GET CURRENT TIMESTAMP
        var setTime = function() {
            date = new Date();
            timestamp = date.getTime();
            time = '' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ' - ' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '/' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/' + date.getFullYear();
            return time;
        };
        // ************************************************************
        // DEFINE TYPES
        var typed = {
            0: 'Data',
            1: 'Object',
            2: 'Group',
            3: 'Instance',
            4: 'Motivation',
            5: 'Communication',
            6: 'Knowledge',
            7: 'Gameplay',
            8: 'Awareness',
            9: 'Constitution',
            10: 'League',
            11: 'Special',
            12: 'Awesome',
            13: 'Perfect',
            14: 'Universal',
            15: 'Absolute'
        };
        // ************************************************************
        // DEFINE VERBS
        var verb = {
            '&': 'is calling',
            '=': 'does behave like',
            '*': 'matched with',
            '<': 'defines the',
            '>': 'describes the',
            '@': 'is related to',
            '#': 'was tagged by',
            '+': 'has been involved with',
            '^': 'comes with',
            's': 'is stacked by',
            'b': 'is buffered for',
            'c': 'was executed `cause of',
            'q': 'was parsed by',
            '!': 'is like',
            '?': 'has conflicts with',
            ':': 'and is related to',
            '/': 'wasn`t found without'
        };
        // ************************************************************
        // DEFINE OBJECTS
        var object = {
            '&': 'Name',
            '=': 'of',
            '*': 'Information',
            '<': 'Definition',
            '>': 'Description',
            '@': 'Relation',
            '#': 'Hashtag',
            '+': 'Object',
            '^': 'Vector',
            's': 'Stack',
            'b': 'Buffer',
            'c': 'Command',
            'q': 'Query',
            '!': 'Status',
            '?': 'Event',
            ':': 'Date',
            '/': 'Time'
        };
        // ************************************************************
        // DEFINE FEATURE
        var feature = {
            0: 'Object Item',
            1: 'Object Name',
            2: 'Object Category',
            3: 'Object Group',
            4: 'Item Section',
            5: 'Item Family',
            6: 'Family Package',
            7: 'Package Brand',
            8: 'Brand Company',
            9: 'Company World',
            10: 'World Universe',
            11: 'Universe Galaxy',
            12: 'Galaxy Cosmos'
        };
        // ************************************************************
        // DEFINE DEFINER
        var definer = {
            true: 'right',
            false: 'wrong',
            null: 'empty',
            undefined: 'didn`t match',
            1: 'best relation',
            2: 'good behavior',
            3: 'doesn`t know',
            4: 'fixed',
            5: 'cleared',
            6: 'deleted',
            7: 'kicked',
            8: 'banned',
            9: 'missed',
            10: 'resetted'
        };
        // ************************************************************
        // DEFINE STATUS
        var status = {
            0: 'OFF',
            1: 'OK',
            2: 'ON',
            3: 'SET',
            4: 'GET',
            5: 'CNT',
            6: 'BRK',
            7: 'REP',
            8: 'PRG',
            9: 'STS',
            10: 'ERR',
            11: 'NOP',
            12: 'GO',
            13: 'EMP',
            14: 'BIT',
            15: 'CMD',
            16: 'RST',
            17: 'CLR',
            18: 'DEL',
            19: 'MVD',
            20: 'FIX'
        };
        // ************************************************************
        // DEFINE HEX VARIABLES
        var hexVar = {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            a: 'a',
            b: 'b',
            c: 'c',
            d: 'd',
            e: 'e',
            f: 'f'
        };
        // ************************************************************
        // ************************************************************
        // QUERY ENVIRONMENT VARS
        var Meta = function(counter) {
            typefix = 0;
            // START OF INPUT-QUERY
            clear = true;
            singleSpc = clear;
            singleRet = !singleSpc;
            singleDel = !singleSpc;
            drop = true;
            flow = drop ? flow : '';
            stack = $userField.prop('value', flow);
            // WRITE CONTEXT-STATUS
            var define = false;
            exec = false;
            flow = _set ? ' | ' : '            * ';
            statusfix = 13 - 12 * response;
            $userField.on('focus', function(e) {
                e.preventDefault();
            // ************************************************************
            // QUERY PROCESSING
                drop = false;
                // LOGIC :: START
                stack = $userField.val();
                // GET SHORTCUT
                if (stack.match(/^.$/)) {
                    scSet = 1;
                    regEx = stack.match(/^(.+)$/)[scSet || 0];
                    if (regEx !== '' && object[regEx] !== undefined) {
                        preStr = regEx === '#' ? '#' : '';
                        defStr = feature[featfix] + ' ' + verb['>'] + ' ' + object[regEx] + ' ' + verb['='] + ' ';
                        appStr = '';
                    }
                    warp = getStatus(preStr + defStr + appStr).res;
                }
                // OPEN DATETIME
                if (stack.match(/^\*$/)) {
                    dateset = true;
                    userField('* [ ' + setTime() + ' ] = ');
                }
                // OPEN URL
                if (stack.match(/^\/\/$/) && !urlset) {
                    urlset = true;
                    userField('http://');
                }
                // GET HASHTAG
                if (stack.match(/^\#$/) && !tagset) {
                    tagset = tagdef = true;
                    userField('#');
                }
                // SAVE HASHTAG
                if (stack.match(/^\#(.+)?\ $/) && tagset && tagdef) {
                    typefix = 3;
                    regEx = stack.match(/^\#(.+)\ $/)[1] || '';
                    if (regEx !== '') {
                        tagArray = {
                            vector: {
                                'local': feature[featfix],
                                'remote': status[statusfix],
                                'pos': tp,
                                'name': {
                                    regEx: {
                                        'inject': '<span class="tag ' + regEx + '">' + regEx + '</span>',
                                        'element': object[objId],
                                        'html': {
                                            '<': '<div class="layoutBox">',
                                            '>': '</div>',
                                            '(': '<script rel="javascript">',
                                            ')': '</script>',
                                            '{': '<style rel="stylesheet">',
                                            '}': '</style>'
                                        }
                                    }
                                }
                            }
                        };

                        tp++;
                        getStatus('> Hashtag saved');
                        regEx = '';
                        userField('');
                    }
                    ti++;
                    tagdef = false;
                }
                // WRITE HASHTAGS
                if (tp !== 0) {
                    setContext(req, cb, res, rem, fix, mem, sts, pointer);
                    context = result;
                }
                for (tagc = 0; tagc < tagArray.length; tagc++) {
                    $box.find('p.match').html(tagArray[tagc].html);
                }
                // ************************************************************
                // CLEAR QUERY-ARRAYS
                if (complete && singleRet) {
                    drop = complete = singleRet = singleTab = define = urlset = dateset = dataset = clear = vector = firstRun = false;
                }
                // RESET QUERY STATUSVARS
                preStr = defStr = appStr = '';
                // END QUERY PARSE PROCEDURE :: STOP
            }).on('blur', function(e) {
                // SET IDLE STATUS
                e.preventDefault();
                drop = true;
                flow = stack;
                stack = userField('');
                // WRITE CONTEXT-STATUS
                statusfix = 0;
                getStatus(status[statusfix] + ' < Interpreter offline !');
            });
            $(window).on('focus', function(e) {
                // SET FOCUSED STATUS
                e.preventDefault();
                // SET READY STATUS FOR NEXT STATEMENT
                ready = recognized ? true : false;
                // WRITE CONTEXT-STATUS
                statusfix = 5;
                getStatus(status[statusfix] + ' < Welcome back ...');
                $userField.focus();
            });
            $(document).ready(function(ev) {
                // SET READY STATUS
                statusfix = 2;
                getStatus(status[statusfix] + ' < Interpreter online !');
                // WRITE CONTEXT-STATUS
                $userField.focus();
            });
        };
        start(req, cb, res);
    });
    window.WebTracker = App;
    window.WebTracker();
};
// APP CALL
WebTracker();
